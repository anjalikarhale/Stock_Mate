import express from "express";
import cors from "cors";
import "dotenv/config";
import prisma from "./config/prisma";
import authRoutes from "./routes/authRoutes";
import { authenticateToken } from "./middleware/authMiddleware";


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/api/protected", authenticateToken, (req, res) => {
  res.json({
    message: "You accessed a protected route!",
    user: req.user,
  });
});

// Test route
app.get("/", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.json({
      message: "StockMate API is running 🚀",
      database: "connected",
    });
  
  } catch (error) {
  console.error("Database error:", error);

  res.status(500).json({
    message: "Database connection failed",
  });
}
});

// Start server
app.listen(PORT, () => {
  console.log(`StockMate server running on http://localhost:${PORT}`);
});