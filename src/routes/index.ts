import { Router } from "express";
import patientRoutes from "../modules/patient/patient.routes.js";
import appointmentRoutes from "../modules/appointment/appointment.routes.js";
import staffRoutes from "../modules/staff/staff.routes.js";
import emrRoutes from "../modules/emr/emr.routes.js";



const router = Router();

router.use("/patients", patientRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/staff", staffRoutes);
router.use("/emr", emrRoutes);


export default router;
