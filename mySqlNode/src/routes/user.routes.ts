import { Router } from "express";

const router = Router();
import {
  addUser,
  login,
  getAllUsers,
} from "../controllers/user/user.controller";
import { auth } from "../middlewares/auth.middleware";

router.post("/register", addUser);
router.post("/login", login);
router.get("/allUsers", auth, getAllUsers);

export default router;
