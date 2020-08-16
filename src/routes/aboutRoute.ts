import {Router as router} from 'express';
import {aboutController} from '../controllers/aboutController';

export const aboutRoute = router();

aboutRoute.use('/', aboutController);
