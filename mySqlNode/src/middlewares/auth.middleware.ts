import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

export const auth = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1] as string;

    if (!token)
      res.status(401).json({ status: false, error: "Token not Found" });

    const decode = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decode;
    next();
  } catch (err) {
    res.status(401).json({
      status: false,
      error: "Authentication failed",
    });
  }
};
