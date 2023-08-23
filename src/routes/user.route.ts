import express from 'express';
const userRoutes = express.Router();
import userController from '../controllers/user.controller';

userRoutes.get("/", userController.findAll)
userRoutes.get("/:id", userController.findId)
userRoutes.post("/", userController.post)

  export default userRoutes