import {Request, Response} from 'express';
import {TodosHandler} from '../models/TodosHandler';
import {Todo} from '../models/Todo';

export class TodosListController {
  public static async getView(req: Request, res: Response): Promise<void> {
    const todos: Todo[] | null = await TodosHandler.findAll();
    res.render('todos', {
      title: 'Todos',
      isList: true,
      todos,
    });
  }
}
