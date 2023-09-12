import { Router } from "express";
import { categoryController } from "./category.controller";

const router = Router();

router.post("/create-category", categoryController.insertIntoDB);

export const categoryRoutes = router;
