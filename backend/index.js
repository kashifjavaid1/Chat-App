import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
const app = express();
dotenv.config();
// middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const port = process.env.PORT || 4002;
const URL = process.env.MONGODB_URL;
try {
  mongoose.connect(URL);
  console.log("MongoDB connected successfully");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

app.use("/user", userRoute);
app.use("/message", messageRoute);
app.listen(port, () => {
  console.log(`Node-js app listening on port ${port}`);
});
