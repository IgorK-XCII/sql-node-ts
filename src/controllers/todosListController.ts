import {Request, Response, Router as router} from 'express';
import {TodosHandler} from '../models/TodosHandler';
import {Todo} from '../models/Todo';

export const todosListController = router();

todosListController.use('/', async (req: Request, res: Response): Promise<void> => {
  const todos: Todo[] | null = await TodosHandler.findAll();
  res.render('todos', {
    title: 'Todos',
    isList: true,
    todos,
  });
});
