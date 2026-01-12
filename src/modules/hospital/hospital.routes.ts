import { Router } from "express";

import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { tenantMiddleware } from "../../middlewares/tenant.middleware.js";
import { authorize } from "../../middlewares/rbac.middleware.js";

import { createDepartment } from "./hospital.controller.js";

const router = Router();

router.post(
  "/departments",
  authMiddleware,
  tenantMiddleware,
  authorize("MANAGE_HOSPITAL"),
  createDepartment
);

export default router;
