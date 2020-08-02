import {Router as router} from 'express';
import {userController} from '../controller/userController';

export const userRouter = router();

userRouter.use('/', userController);
