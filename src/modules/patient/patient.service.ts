import  prisma  from '../../config/prisma.js';
import { generatePatientCode } from '../../utils/patientCode.js';

export const createPatient = async (data: any, tenantId: string) => {
  const count = await prisma.patient.count({ where: { tenantId } });

  return prisma.patient.create({
    data: {
      ...data,
      tenantId,
      patientCode: generatePatientCode(tenantId, count + 1),
    },
  });
};
