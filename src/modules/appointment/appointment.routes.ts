import { Router } from "express";

import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { tenantMiddleware } from "../../middlewares/tenant.middleware.js";
import { authorize } from "../../middlewares/rbac.middleware.js";

import {
  createAppointmentController,
  listAppointmentsController,
  updateAppointmentStatusController,
} from "./appointment.controller.js";

const router = Router();

/**
 * POST /appointments
 */
router.post(
  "/",
  authMiddleware,
  tenantMiddleware,
  authorize("WRITE_APPOINTMENT"),
  createAppointmentController
);

/**
 * GET /appointments?doctorId=&date=
 */
router.get(
  "/",
  authMiddleware,
  tenantMiddleware,
  authorize("READ_APPOINTMENT"),
  listAppointmentsController
);

/**
 * PATCH /appointments/:id/status
 */
router.patch(
  "/:id/status",
  authMiddleware,
  tenantMiddleware,
  authorize("WRITE_APPOINTMENT"),
  updateAppointmentStatusController
);

export default router;
