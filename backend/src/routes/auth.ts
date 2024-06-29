import { Router } from "express";
import { register, login } from "../models/User"

const router = Router();

router.post("/register", register);
router.post("/login", login);

export default router;
