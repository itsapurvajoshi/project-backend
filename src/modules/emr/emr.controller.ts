import type { Response } from "express";
import type { AuthRequest } from "../../middlewares/auth.middleware.js";

import {
  createConsultation,
  createSoap,
  createPrescription,
  createLabOrder,
  signConsultation,
} from "./emr.service.js";

export const createConsultationController = async (
  req: AuthRequest,
  res: Response
) => {
  const record = await createConsultation({
    ...req.body,
    tenantId: req.user!.tenantId,
  });

  res.status(201).json(record);
};

export const createSoapController = async (
  req: AuthRequest,
  res: Response
) => {
  const record = await createSoap({
    ...req.body,
    tenantId: req.user!.tenantId,
  });

  res.status(201).json(record);
};

export const createPrescriptionController = async (
  req: AuthRequest,
  res: Response
) => {
  const record = await createPrescription({
    ...req.body,
    tenantId: req.user!.tenantId,
  });

  res.status(201).json(record);
};

export const createLabOrderController = async (
  req: AuthRequest,
  res: Response
) => {
  const record = await createLabOrder({
    ...req.body,
    tenantId: req.user!.tenantId,
  });

  res.status(201).json(record);
};

export const signConsultationController = async (
  req: AuthRequest,
  res: Response
) => {
  const { consultationId } = req.body;

  const record = await signConsultation(consultationId);
  res.json(record);
};
