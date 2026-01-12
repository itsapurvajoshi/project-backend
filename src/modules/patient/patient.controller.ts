import type { Response } from "express";
import type { AuthRequest } from "../../middlewares/auth.middleware.js";
import prisma from "../../config/prisma.js";

export const registerPatient = async (
  req: AuthRequest,
  res: Response
) => {
  if (!req.user?.tenantId) {
    return res.status(400).json({ message: "Tenant not resolved" });
  }

  const { name, dob, gender, phone } = req.body;

  if (!name || !dob || !gender || !phone) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const count = await prisma.patient.count({
    where: { tenantId: req.user.tenantId },
  });

  const patient = await prisma.patient.create({
    data: {
      name,
      dob: new Date(dob),
      gender,
      phone,
      tenantId: req.user.tenantId,
      patientCode: `PAT-${count + 1}`, // or your generator
    },
  });

  res.status(201).json(patient);
};

export const listPatients = async (
  req: AuthRequest,
  res: Response
) => {
  if (!req.user?.tenantId) {
    return res.status(400).json({ message: "Tenant not resolved" });
  }

  const patients = await prisma.patient.findMany({
    where: {
      tenantId: req.user.tenantId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  res.json(patients);
};
