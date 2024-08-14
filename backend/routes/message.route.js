// import express from "express";
// import { sendMessage } from "../controller/message.controller.js";
// import findCurrentUser from "../middleware/currentUserFind.js";
// const router = express.Router();
// router.post("/send:id", findCurrentUser, sendMessage);
// export default router;
import express from "express";
import { sendMessage } from "../controller/message.controller.js";
import findCurrentUser from "../middleware/currentUserFind.js";

const router = express.Router();

router.post("/send/:id", findCurrentUser, sendMessage);

export default router;
