import type { Response } from "express";
import type { AuthRequest } from "../../middlewares/auth.middleware.js";
import prisma from "../../config/prisma.js";

export const createDepartment = async (req: AuthRequest, res: Response) => {
  if (!req.user?.tenantId) {
    return res.status(400).json({ message: "Tenant not resolved" });
  }

  const department = await prisma.department.create({
    data: {
      name: req.body.name,
      tenantId: req.user.tenantId,
    },
  });

  res.json(department);
};
