import express from 'express';
const transactionRoutes = express.Router();
import transactionController from '../controllers/transaction.controller';

transactionRoutes.get("/", transactionController.findAll)
transactionRoutes.post("/", transactionController.post)
// transactionRoutes.put("/", transactionController.putTransaction)

  export default transactionRoutes