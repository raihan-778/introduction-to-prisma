import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.post("/create-user", userController.insertIntoDB);
// router.get("/", userController.createIntoDB);

export const userRoutes = router;
