import { Router } from 'express';
import { UserController } from './controller/UserController';

const routes = Router();

const userController = new UserController();

routes.use(function timeLog(req, res, next) {
    console.log('Time: '+ Date.now() + ' route: '+ req.url);
    next();
  });

routes.get('/', userController.getUser)
routes.put('/', userController.updateUser);
routes.post('/', userController.createUser);
routes.delete('/', userController.deleteUser);

export {routes};
