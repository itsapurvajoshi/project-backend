export const PERMISSIONS = {
  // Hospital
  MANAGE_HOSPITAL: ["ADMIN"],

  // Patient
  READ_PATIENT: ["ADMIN", "DOCTOR"],
  WRITE_PATIENT: ["ADMIN"],

  // Appointment
  READ_APPOINTMENT: ["ADMIN", "DOCTOR", "RECEPTION"],
  WRITE_APPOINTMENT: ["ADMIN", "RECEPTION"],

  // Staff 
  READ_STAFF: ["ADMIN", "HR"],
  WRITE_STAFF: ["ADMIN", "HR"],

  // EMR
  READ_EMR: ["DOCTOR"],
  WRITE_EMR: ["DOCTOR"],
} as const;
