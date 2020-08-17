import {Request, Response} from 'express';

export class CreateTodosController {
  public static getView(req: Request, res: Response): void {
    res.render('create', {
      title: 'Create todo',
      isCreate: true,
    });
  }
  public static postTodo(req: Request, res: Response): void {
    res.render('create', {
      title: 'Create todo',
      isCreate: true,
    });
  }
}
