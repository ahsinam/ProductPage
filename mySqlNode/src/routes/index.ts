import { Router } from "express";
import userRoutes from "./user.routes";
import productRoutes from "./product.routes";

const routes = Router();


routes.use("/users", userRoutes);
routes.use("/products", productRoutes);

export default routes;
