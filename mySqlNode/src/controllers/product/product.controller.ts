import { Prisma } from "@prisma/client";
import { prismaClient } from "../../utils/prisma.utils";
import { Request, Response, NextFunction } from "express";

export const addProduct = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { prod_name, quantity, price, remark, description } = req.body;
    if (!prod_name || !quantity || !price || !remark || !description)
      throw new Error("Body wasn't sent properly");

    const owner = await prismaClient.user.findUnique({
      where: { id: req.user.id },
    });

    if (!owner) throw new Error("user not found");

    const newProduct = await prismaClient.product.create({
      data: {
        prod_name,
        quantity,
        price,
        remark,
        description,
        userName: owner?.username,
      },
    });

    const {
      id,
      prod_name: name,
      price: amount,
      description: details,
    } = newProduct;
    res.status(200).json({
      satus: "success",
      data: {
        id,
        prod_name: name,
        price: amount,
        description: details,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allProducts = await prismaClient.product.findMany();

    res.json(allProducts);
  } catch (err) {
    next(err);
  }
};
