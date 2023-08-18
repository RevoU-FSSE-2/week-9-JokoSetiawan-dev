import express from 'express';
const routes = express.Router();
import userRoutes from './user.route';
import transactionRoutes from './transaction.route';

routes.get("/", (req, res) => {
    res.status(200).json({
      success: true,
      message: "Hello World!",
    });
  });

routes.use('/user', userRoutes);
routes.use('/transaction', transactionRoutes);

export default routes;