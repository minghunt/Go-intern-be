import mongoose from "mongoose";
import { CONNECTION_STRING } from "../config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};
