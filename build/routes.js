"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const UserController_1 = require("./controller/UserController");
const routes = (0, express_1.Router)();
exports.routes = routes;
const userController = new UserController_1.UserController();
routes.use(function timeLog(req, res, next) {
    console.log('Time: ' + Date.now() + ' route: ' + req.url);
    next();
});
routes.get('/user', userController.getAllUsers);
routes.get('/user/:id', userController.getUserById);
routes.get('/user/login', userController.login);
routes.put('/user/update', userController.updateUser);
routes.post('/user', userController.createUser);
routes.delete('/user', userController.deleteUser);
