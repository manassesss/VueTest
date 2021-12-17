import { Router } from "express"
import doctorController from "../controllers/DoctorController"

const router = new Router()

router.post("/", doctorController.store);
router.get("/", doctorController.index);
router.get("/makeappointment", doctorController.select);
router.put("/:id", doctorController.update);
router.delete("/:id", doctorController.delete);

export default router;