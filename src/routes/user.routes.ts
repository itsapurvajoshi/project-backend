import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { tenantMiddleware } from "../middlewares/tenant.middleware.js";
import { getUsers } from "../controllers/user.controller.js";

const router = Router();

// 🔐 Apply middlewares to ALL routes below
router.use(authMiddleware);
router.use(tenantMiddleware);

// 👇 Protected + tenant-aware route
router.get("/", getUsers);

export default router;
