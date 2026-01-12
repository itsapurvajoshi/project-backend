import { Router } from "express";

import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { tenantMiddleware } from "../../middlewares/tenant.middleware.js";
import { authorize } from "../../middlewares/rbac.middleware.js";

import {
  createConsultationController,
  createSoapController,
  createPrescriptionController,
  createLabOrderController,
  signConsultationController,
} from "./emr.controller.js";

const router = Router();

router.post(
  "/consultation",
  authMiddleware,
  tenantMiddleware,
  authorize("WRITE_EMR"),
  createConsultationController
);

router.post(
  "/soap",
  authMiddleware,
  tenantMiddleware,
  authorize("WRITE_EMR"),
  createSoapController
);

router.post(
  "/prescription",
  authMiddleware,
  tenantMiddleware,
  authorize("WRITE_EMR"),
  createPrescriptionController
);

router.post(
  "/lab-order",
  authMiddleware,
  tenantMiddleware,
  authorize("WRITE_EMR"),
  createLabOrderController
);

router.post(
  "/sign",
  authMiddleware,
  tenantMiddleware,
  authorize("WRITE_EMR"),
  signConsultationController
);

export default router;
