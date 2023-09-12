import { Router } from "express";
import { postController } from "./post.controller";

const router = Router();

router.post("/create-post", postController.insertIntoDB);
router.get("/", postController.getAllPosts);
router.get("/learn-query", postController.learnAggrigateAndGrouping);

router.get("/:id", postController.getSinglePost);
router.patch("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

export const postRoutes = router;
