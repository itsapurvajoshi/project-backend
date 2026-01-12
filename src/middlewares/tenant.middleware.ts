import type { Response, NextFunction } from "express";
import type { AuthRequest } from "./auth.middleware.js";

export function tenantMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  if (!req.user?.tenantId) {
    return res.status(403).json({ message: "Tenant access denied" });
  }

  next();
}
