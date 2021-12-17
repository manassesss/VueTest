import { Router } from "express"
import appointmentController from "../controllers/AppointmentController"

const router = new Router()

router.post("/", appointmentController.store);
router.get("/", appointmentController.index);
router.get("/:id", appointmentController.select);
router.put("/:id", appointmentController.update);
router.delete("/:id", appointmentController.delete);

export default router;