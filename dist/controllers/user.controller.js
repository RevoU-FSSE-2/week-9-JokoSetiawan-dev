"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_connection_1 = require("../config/db.connection");
const findAll = async (req, res) => {
    try {
        const result = await db_connection_1.db.query("SELECT * FROM user_table");
        res.status(200).json({
            success: true,
            data: result[0],
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
const findId = async (req, res) => {
    try {
        const id = req.params.id;
        const getById = await db_connection_1.db.query(`SELECT
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
const post = async (req, res) => {
    try {
        const body = req.body;
        const result = await db_connection_1.db.query(`insert into mbanking_app.user_table (name, address)
    values (?,?)`, [body.name, body.address]);
        const id = result[0].insertId;
        const getId = await db_connection_1.db.query(`select * from user_table where id =` + id);
        console.log(getId);
        res.status(200).json({
            success: true,
            data: getId[0],
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
const userController = { findAll, post, findId };
exports.default = userController;
