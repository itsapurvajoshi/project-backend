import { Router } from "express";

import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { tenantMiddleware } from "../../middlewares/tenant.middleware.js";
import { authorize } from "../../middlewares/rbac.middleware.js";

import {
  createStaffController,
  listStaffController,
  assignShiftController,
  listAttendanceController,
} from "./staff.controller.js";

const router = Router();

/**
 * POST /staff
 */
router.post(
  "/",
  authMiddleware,
  tenantMiddleware,
  authorize("WRITE_STAFF"),
  createStaffController
);

/**
 * GET /staff
 */
router.get(
  "/",
  authMiddleware,
  tenantMiddleware,
  authorize("READ_STAFF"),
  listStaffController
);

/**
 * POST /staff/shifts
 */
router.post(
  "/shifts",
  authMiddleware,
  tenantMiddleware,
  authorize("WRITE_STAFF"),
  assignShiftController
);

/**
 * GET /staff/attendance
 */
router.get(
  "/attendance",
  authMiddleware,
  tenantMiddleware,
  authorize("READ_STAFF"),
  listAttendanceController
);

export default router;
