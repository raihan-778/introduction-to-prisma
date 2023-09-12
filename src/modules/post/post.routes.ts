import { Router } from "express";
import { postController } from "./post.controller";

const router = Router();

router.post("/create-post", postController.insertIntoDB);
router.get("/", postController.getAllPosts);
router.get("/:id", postController.getSinglePost);

export const postRoutes = router;
