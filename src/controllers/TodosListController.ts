import {Request, Response} from 'express';
import {TodosHandler} from '../models/TodosHandler';
import {Todo} from '../models/Todo';
import {toArray} from '../shared/utils';

export class TodosListController {
  public static async getView(req: Request, res: Response): Promise<void> {
    const todos: Todo[] | null = await TodosHandler.findAll();
    res.render('todos', {
      title: 'Todos',
      isList: true,
      todos,
    });
  }
  public static async updateTodos(req: Request, res: Response): Promise<void> {
    const {del, completed, id} = req.body;
    if (del) {
      const success: boolean = await TodosHandler.remove(del);
      success ? res.redirect('/') : res.status(400);
      return;
    }
    const completedTodos: string[] = completed ? toArray(completed) : [];
    const success: boolean = await TodosHandler.updateAll(toArray(id), completedTodos);
    success ? res.redirect('/') : res.status(400);
  }
}
