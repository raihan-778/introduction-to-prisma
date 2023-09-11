import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.post("/create-user", userController.insertIntoDB);
router.post("/profile", userController.insertOrUpdateProfile);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getSingleUser);

export const userRoutes = router;
