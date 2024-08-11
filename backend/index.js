import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
const app = express();
dotenv.config();
app.use(express.json());
const port = process.env.PORT || 4002;
const URL = process.env.MONGODB_URL;
try {
  mongoose.connect(URL);
  console.log("MongoDB connected successfully");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

app.use("/user", userRoute);
app.listen(port, () => {
  console.log(`Node-js app listening on port ${port}`);
});
