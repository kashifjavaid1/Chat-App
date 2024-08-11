import express from "express";
import { signIn, login, logout } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signIn);
router.post("/login", login);
router.post("/logout", logout);

export default router;
