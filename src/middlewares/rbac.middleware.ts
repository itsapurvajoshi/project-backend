import type { Response, NextFunction } from "express";
import type { AuthRequest } from "./auth.middleware.js";
import { PERMISSIONS } from "../config/permissions.js";

export const authorize =
  (permission: keyof typeof PERMISSIONS) =>
  (req: AuthRequest, res: Response, next: NextFunction) => {
    // 🔒 Ensure user exists (authMiddleware must run first)
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const allowedRoles = PERMISSIONS[permission];

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
