import { get, post } from "./axios";

export const addProduct = async (userData: any) => {
  const data = await post("/products/addProduct", { body: userData });

  return data;
};

export const fetchProduct = async () => {
  const { data, ...other } = await get("/products/getProducts");

  return data;
};
