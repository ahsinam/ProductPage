import axios, { ResponseType } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4004/",

  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authentcation_token") || "";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const get = async (
  url: string,
  params = {},
  responseType = "json" as ResponseType
) => {
  return instance({
    url,
    params,
    method: "get",
    responseType,
  })
    .then((response) => response)
    .catch((error) => {
      console.log(error);
      throw error?.response?.data;
    });
};

export const post = async (url: string, { params = {}, body = {} }) => {
  console.log("POST");
  return instance({
    url,
    params,
    data: body,
    method: "post",
  })
    .then((response) => response)
    .catch((error) => {
      throw error?.response.data;
    });
};
