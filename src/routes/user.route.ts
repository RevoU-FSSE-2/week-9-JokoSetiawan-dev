import express from 'express';
const userRoutes = express.Router();
import userController from '../controllers/user.controller';

userRoutes.get("/", userController.findAll)

  export default userRoutes