import express from "express";
import {
  getConversation,
  sendMessage,
} from "../controller/message.controller.js";
import findCurrentUser from "../middleware/currentUserFind.js";

const router = express.Router();

router.post("/send/:id", findCurrentUser, sendMessage);
router.get("/get/:id", findCurrentUser, getConversation);

export default router;
