import { Router } from "express"
import userController from "../controllers/UserController"

const router = new Router()

router.post("/", userController.store);
router.get("/", userController.index);
router.post("/login", userController.select);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;