import express from "express";
import cors from "cors";
import products from "./routes/productsRoutes.js";
import { connectDB } from "./db/connection.js";

const start = async () => {
  const app = express();
  connectDB();

  // Middleware
  app.use(express.json());
  app.use(cors());

  // Routes
  app.use("/api/v1/products", products);
  // Start server
  app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
  });
};

start();
