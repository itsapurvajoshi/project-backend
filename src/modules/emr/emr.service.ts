import prisma from "../../config/prisma.js";

export const createConsultation = async (data: any) => {
  return prisma.consultation.create({ data });
};

export const createSoap = async (data: any) => {
  return prisma.soapNote.create({ data });
};

export const createPrescription = async (data: any) => {
  return prisma.prescription.create({ data });
};

export const createLabOrder = async (data: any) => {
  return prisma.labOrder.create({ data });
};

export const signConsultation = async (consultationId: string) => {
  return prisma.consultation.update({
    where: { id: consultationId },
    data: { signed: true },
  });
};
