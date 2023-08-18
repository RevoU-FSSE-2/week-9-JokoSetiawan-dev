import { Request, Response } from "express";
import { db } from "../config/db.connection";

const findAll = async (req: Request, res: Response) => {
  try {
    const result = await db.query("SELECT * FROM transaction_table");

    res.status(200).json({
      success: true,
      message: "get transaction!",
      data: result[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const post = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result: any = await db.query(
      `insert into mbanking_app.transaction_table (type, amount, user_id)
    values (?,?,?)`,
      [body.type, body.amount, body.user_id])
      const id = result[0].insertId;
      const getId: any = await db.query(
      `select * from transaction_table where id =` + id)
      console.log(getId)
      res.status(200).json({
        success: true,
        data: getId[0],
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


const transactionController = {findAll, post,}
export default transactionController;