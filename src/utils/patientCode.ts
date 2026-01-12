export const generatePatientCode = (tenantCode: string, count: number) => {
  return `${tenantCode}-${new Date().getFullYear()}-${String(count).padStart(5, '0')}`;
};
