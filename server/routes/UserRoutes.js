import express from 'express';
import { signUpUser,loginUser  } from '../controller/UserController.js';

const userRouter = express.Router();

userRouter.post("/user/signup", signUpUser)
userRouter.post("/user/login", loginUser)

export default userRouter