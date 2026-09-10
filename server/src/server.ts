import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (_req, res) => {
  res.json({
    message: "StockMate API is running 🚀",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`StockMate server running on http://localhost:${PORT}`);
});