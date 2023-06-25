import { Router } from "express";
const router = Router();
import {
  addProduct,
  getAllProducts,
} from "../controllers/product/product.controller";
import { auth } from "../middlewares/auth.middleware";

router.post("/addProduct", auth, addProduct);
router.get("/getProducts", getAllProducts);

export default router;
