import { get, post } from "./axios";

export const fetchUser = async () => {
  const { data, ...other } = await get("/users/allUsers");

  // const { data, ...other } = await get("localhost:4004/users/allUsers");

  return data;
};

export const resgiterUser = async (userData: any) => {
  const data = await post("/users/register", { body: userData });

  return data;
};

export const loginUserService = async (userData: any): Promise<string> => {
  const response = await post("users/login", { body: userData });
  const token = response.data.token;
  return token;
};
