import { Router } from "express";

import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { tenantMiddleware } from "../../middlewares/tenant.middleware.js";
import { authorize } from "../../middlewares/rbac.middleware.js";

import {
  registerPatient,
  listPatients,
} from "./patient.controller.js";

const router = Router();

// Create patient
router.post(
  "/",
  authMiddleware,
  tenantMiddleware,
  authorize("WRITE_PATIENT"),
  registerPatient
);

// List patients
router.get(
  "/",
  authMiddleware,
  tenantMiddleware,
  authorize("READ_PATIENT"),
  listPatients
);

export default router;
