import { Request, Response } from "express";
import { db } from "../config/db.connection";

const findAll = async (req: Request, res: Response) => {
  try {
    const [result] = await db.promise().query("SELECT * FROM user_table");

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const findId = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const getById = await db.promise().query(`SELECT
        ut.id,
        ut.name,
        ut.address,
        SUM(CASE WHEN tt.type = 'expense' THEN tt.amount ELSE 0 END) AS expense,
        SUM(CASE WHEN tt.type = 'income' THEN tt.amount ELSE -tt.amount END) AS balance
    FROM
        user_table AS ut
    LEFT JOIN
        transaction_table AS tt ON ut.id = tt.user_id
    WHERE
        ut.id = ?
    GROUP BY
        ut.id
  `, id);

    res.status(200).json({
      success: true,
      data: getById[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const post = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result: any = await db.promise().query(
      `insert into mbanking_app.user_table (name, address)
    values (?,?)`,
      [body.name, body.address])
      const id = result[0].insertId;
      const getId: any = await db.promise().query(
      `select * from user_table where id =` + id)
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

const userController = {findAll, post, findId};
export default userController;
