import {Request, Response} from 'express';

export class AboutController {
  public static getView(req: Request, res: Response): void {
    res.render('about', {
      title: 'About',
      isAbout: true,
    });
  }
}
