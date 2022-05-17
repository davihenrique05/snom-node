import { Router } from 'express';
import { UserController } from './controller/UserController';

const routes = Router();

const userController = new UserController();

routes.use(function timeLog(req, res, next) {
    console.log('Time: '+ Date.now() + ' route: '+ req.url);
    next();
  });

routes.get('/user', userController.getAllUsers)
routes.get('/user/:id', userController.getUserById);
routes.get('/user/login', userController.login)
routes.put('/user/update', userController.updateUser);
routes.post('/user', userController.createUser);
routes.delete('/user', userController.deleteUser);

export {routes};
