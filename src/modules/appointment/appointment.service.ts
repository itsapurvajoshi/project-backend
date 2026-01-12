import prisma from "../../config/prisma.js";

/**
 * Create appointment (already mostly done)
 */
export const createAppointment = async (
  tenantId: string,
  doctorId: string,
  patientId: string,
  scheduledAt: Date
) => {
  const lastToken = await prisma.appointment.findFirst({
    where: { tenantId, doctorId },
    orderBy: { tokenNumber: "desc" },
  });

  const token = lastToken ? lastToken.tokenNumber + 1 : 1;

  return prisma.appointment.create({
    data: {
      tenantId,
      doctorId,
      patientId,
      scheduledAt,
      tokenNumber: token,
      status: "SCHEDULED",
    },
  });
};

/**
 * List appointments
 */
export const listAppointments = async (params: {
  tenantId: string;
  doctorId?: string;
  date?: string;
}) => {
  const { tenantId, doctorId, date } = params;

  return prisma.appointment.findMany({
    where: {
      tenantId,
      doctorId,
      ...(date && {
        scheduledAt: {
          gte: new Date(`${date}T00:00:00.000Z`),
          lt: new Date(`${date}T23:59:59.999Z`),
        },
      }),
    },
    orderBy: {
      scheduledAt: "asc",
    },
  });
};

/**
 * Update appointment status
 */
export const updateAppointmentStatus = async (
  appointmentId: string,
  status: "SCHEDULED" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED"
) => {
  return prisma.appointment.update({
    where: { id: appointmentId },
    data: { status },
  });
};
