import { Request, Response } from "express";
import { userService } from "./user.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await userService.createIntoDB(req.body);
    res.send({
      status: 200,
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertOrUpdateProfile(req.body);
    res.send({
      status: 200,
      success: true,
      message: "User Profile Create/Updated successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUsers();
    res.send({
      status: 200,
      success: true,
      message: "User data fatched successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getSingleUser(parseInt(req.params.id));
    res.send({
      status: 200,
      success: true,
      message: "User data fatched successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const userController = {
  insertIntoDB,
  insertOrUpdateProfile,
  getAllUsers,
  getSingleUser,
};
