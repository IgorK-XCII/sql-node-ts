import {Request, Response, Router as router} from 'express';
export const createTodosController = router();

createTodosController.use('/', (req: Request, res: Response): void => {
  res.render('create', {
    title: 'Create todo',
    isCreate: true,
  });
});
