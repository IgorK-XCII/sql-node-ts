import {Router as router} from 'express';
import {TodosListController} from '../controllers/TodosListController';


export const todosListRoute = router();

todosListRoute.get('/', TodosListController.getView);
todosListRoute.post('/', TodosListController.updateTodos);
