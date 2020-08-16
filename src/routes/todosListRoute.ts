import {Router as router} from 'express';
import {todosListController} from '../controllers/todosListController';

export const todosListRoute = router();

todosListRoute.use('/', todosListController);
