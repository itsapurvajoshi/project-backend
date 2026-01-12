import prisma from "../../config/prisma.js";

/**
 * Create staff member
 */
export const createStaff = async (tenantId: string, data: any) => {
  return prisma.staff.create({
    data: {
      ...data,
      tenantId,
    },
  });
};

/**
 * List staff
 */
export const listStaff = async (tenantId: string) => {
  return prisma.staff.findMany({
    where: { tenantId },
  });
};

/**
 * Assign shift
 */
export const assignShift = async (tenantId: string, data: any) => {
  return prisma.staffShift.create({
    data: {
      ...data,
      tenantId,
    },
  });
};

/**
 * List attendance
 */
export const listAttendance = async (tenantId: string) => {
  return prisma.staffAttendance.findMany({
    where: { tenantId },
  });
};
