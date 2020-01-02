import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';
import auth from './app/middlewares/auth';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.use(auth);

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.store);
export default routes;
