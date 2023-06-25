import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { prismaClient } from "../../utils/prisma.utils";
import { getHashedText } from "../../utils/encryption";

export const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, password, address, phone, gender } = req.body;
    if (!username || !email || !password || !address || !phone || !gender)
      throw new Error("Body wasn't sent properly");
    if (!username.includes(" ")) throw new Error("Full Name is required");
    const emailRegex = /@gmail.com|@yahoo.com|@hotmail.com/;
    if (!emailRegex.test(email))
      throw "Email is not supported from your domain.";

    const userExists = await prismaClient.user.findUnique({ where: { email } });
    if (userExists) throw new Error("User with same email already exists");

    const hashedPassword = await getHashedText(password);

    const newUser = await prismaClient.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        address,
        phone,
        gender,
      },
    });

    const { id, email: userEmail, username: userName } = newUser;
    res.status(200).json({
      status: "success",
      data: {
        id,
        email: userEmail,
        username: userName,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Enter your email and password");

    const user = await prismaClient.user.findUnique({ where: { email } });
    if (!user) throw new Error("User not found!");
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw new Error("Incorrect Password");

    const payload = { id: user.id, email: user.email };
    const expiresIn = "365d";
    const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn });

    res.status(200).json({
      status: "Success",
      token,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await prismaClient.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        address: true,
        phone: true,
        gender: true,
      },
    });

    res.json(users);
  } catch (err) {
    next(err);
  }
};
