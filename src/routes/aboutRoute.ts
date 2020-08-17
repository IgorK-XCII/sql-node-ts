import {Router as router} from 'express';
import {AboutController} from '../controllers/AboutController';

export const aboutRoute = router();

aboutRoute.get('/', AboutController.getView);
