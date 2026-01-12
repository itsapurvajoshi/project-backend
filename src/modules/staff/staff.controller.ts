import type { Response } from "express";
import type { AuthRequest } from "../../middlewares/auth.middleware.js";

import {
  createStaff,
  listStaff,
  assignShift,
  listAttendance,
} from "./staff.service.js";

/**
 * POST /staff
 */
export const createStaffController = async (
  req: AuthRequest,
  res: Response
) => {
  if (!req.user?.tenantId) {
    return res.status(400).json({ message: "Tenant not resolved" });
  }

  const staff = await createStaff(req.user.tenantId, req.body);
  res.status(201).json(staff);
};

/**
 * GET /staff
 */
export const listStaffController = async (
  req: AuthRequest,
  res: Response
) => {
  const staff = await listStaff(req.user!.tenantId);
  res.json(staff);
};

/**
 * POST /staff/shifts
 */
export const assignShiftController = async (
  req: AuthRequest,
  res: Response
) => {
  const shift = await assignShift(req.user!.tenantId, req.body);
  res.status(201).json(shift);
};

/**
 * GET /staff/attendance
 */
export const listAttendanceController = async (
  req: AuthRequest,
  res: Response
) => {
  const attendance = await listAttendance(req.user!.tenantId);
  res.json(attendance);
};
