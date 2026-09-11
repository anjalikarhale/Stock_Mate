import { Router } from "express";
import { getMe } from "../controllers/userController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/me", authenticateToken, getMe);

export default router;