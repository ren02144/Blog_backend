import express from 'express';
import { UserController } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get('/', UserController.getUsers);
// userRouter.get('/:id', UserController.getUserById);
// userRouter.post('/', UserController.createUser);
// userRouter.put('/:id', UserController.updateUser);
// userRouter.delete('/:id', UserController.deleteUser);

export default userRouter;
