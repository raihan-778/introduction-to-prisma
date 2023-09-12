import { Request, Response } from "express";
import { postService } from "./post.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await postService.insertIntoDB(req.body);
    res.send({
      status: 200,
      success: true,
      message: "New Post Created successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const getAllPosts = async (req: Request, res: Response) => {
  console.log(req.query);
  const options = req.query;
  try {
    const result = await postService.getAllPosts(options);
    res.send({
      status: 200,
      success: true,
      message: "Post fatched successfully",
      total: result.total,
      data: result.data,
    });
  } catch (err) {
    res.send(err);
  }
};
const getSinglePost = async (req: Request, res: Response) => {
  try {
    const result = await postService.getSinglePost(parseInt(req.params.id));
    res.send({
      status: 200,
      success: true,
      message: "Single Post fatched successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const updatePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data = req.body;

  try {
    const result = await postService.updatePost(id, data);
    res.send({
      status: 200,
      success: true,
      message: " Post updated successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const deletePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await postService.deletePost(id);
    res.send({
      status: 200,
      success: true,
      message: " Post Deleted successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const learnAggrigateAndGrouping = async (req: Request, res: Response) => {
  try {
    const result = await postService.learnAggrigateAndGrouping();
    res.send({
      status: 200,
      success: true,
      message: " authorId average",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const postController = {
  insertIntoDB,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  learnAggrigateAndGrouping,
};
