import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./socketIo/socket.Io.js";

dotenv.config();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);

const port = process.env.PORT || 3000;
const URL = process.env.MONGODB_URL;
console.log("🚀 ~ URL:", URL);

if (!URL) {
  console.error("MONGODB_URL is not defined");
  process.exit(1); // Exit the process if URL is not defined
}

const connectMongoDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

connectMongoDB();

app.use("/user", userRoute);
app.use("/message", messageRoute);

server.listen(port, () => {
  console.log(`Node.js app listening on port ${port}`);
});
