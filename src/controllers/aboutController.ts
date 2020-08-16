import {Request, Response, Router as router} from 'express';

export const aboutController = router();
aboutController.use('/', (req: Request, res: Response): void => {
  res.render('about', {
    title: 'About',
    isAbout: true,
  });
});
