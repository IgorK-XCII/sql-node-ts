import {Request, Response, Router as router} from 'express';

export const mainRouter = router();

mainRouter.use('/', (req: Request, res: Response) => {
  res.render('index');
});
