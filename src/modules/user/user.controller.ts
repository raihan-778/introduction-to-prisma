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

export const userController = {
  insertIntoDB,
};
