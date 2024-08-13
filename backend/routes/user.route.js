import express from "express";
import {
  signIn,
  login,
  logout,
  getAllUsers,
} from "../controller/user.controller.js";
import findCurrentUser from "../middleware/currentUserFind.js";
const router = express.Router();

router.post("/signup", signIn);
router.post("/login", login);
router.post("/logout", logout);
router.get("/", findCurrentUser, getAllUsers);

export default router;
