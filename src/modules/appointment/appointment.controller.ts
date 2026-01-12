import type { Response } from "express";
import type { AuthRequest } from "../../middlewares/auth.middleware.js";

import {
  createAppointment,
  listAppointments,
  updateAppointmentStatus,
} from "./appointment.service.js";

export const createAppointmentController = async (
  req: AuthRequest,
  res: Response
) => {
  if (!req.user?.tenantId) {
    return res.status(400).json({ message: "Tenant not resolved" });
  }

  const { doctorId, patientId, scheduledAt } = req.body;

  const appointment = await createAppointment(
    req.user.tenantId,
    doctorId,
    patientId,
    new Date(scheduledAt)
  );

  res.status(201).json(appointment);
};

export const listAppointmentsController = async (
  req: AuthRequest,
  res: Response
) => {
  if (!req.user?.tenantId) {
    return res.status(400).json({ message: "Tenant not resolved" });
  }

  const { doctorId, date } = req.query;

  const appointments = await listAppointments({
    tenantId: req.user.tenantId,
    doctorId: doctorId as string | undefined,
    date: date as string | undefined,
  });

  res.json(appointments);
};

export const updateAppointmentStatusController = async (
  req: AuthRequest,
  res: Response
) => {
  const { id } = req.params;
  const { status } = req.body;

  const appointment = await updateAppointmentStatus(id, status);

  res.json(appointment);
};
