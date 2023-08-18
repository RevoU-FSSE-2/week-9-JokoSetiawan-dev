import { Request, Response } from "express";
import { db } from "../config/db.connection";

const findAll = async (req: Request, res: Response) => {
  try {
    const result = await db.query("SELECT * FROM user_table");

    res.status(200).json({
      success: true,
      data: result[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


const userController = { findAll};
export default userController;
