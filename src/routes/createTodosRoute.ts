import {Router as router} from 'express';
import {CreateTodosController} from '../controllers/CreateTodosController';

export const createTodosRoute = router();

createTodosRoute.get('/', CreateTodosController.getView);

createTodosRoute.post('/', CreateTodosController.postTodo);
