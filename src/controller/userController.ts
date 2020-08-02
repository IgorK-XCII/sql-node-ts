import {Request, Response} from 'express';
import {sqlDatabase} from '../app';

export const userController = async (req: Request, res: Response): Promise<void> => {
  const response = await sqlDatabase.request('select count(*) as count from users');
  const users = response[0].count;

  res.send(`We have ${users} users in db`);
};
