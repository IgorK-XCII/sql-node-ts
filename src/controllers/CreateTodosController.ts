import {Request, Response} from 'express';
import {TodosHandler} from '../models/TodosHandler';
import {Todo} from '../models/Todo';

export class CreateTodosController {
  public static getView(req: Request, res: Response): void {
    res.render('create', {
      title: 'Create todo',
      isCreate: true,
    });
  }
  public static async postTodo(req: Request, res: Response): Promise<void> {
    const response = await TodosHandler.add(new Todo(req.body.title, false));
    if (response) {
      res.redirect('/');
    } else {
      res.status(400);
    }
  }
}
