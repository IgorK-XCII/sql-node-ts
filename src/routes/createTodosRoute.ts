import {Router as router} from 'express';
import {createTodosController} from '../controllers/createTodosController';

export const createTodosRoute = router();

createTodosRoute.use('/', createTodosController);
