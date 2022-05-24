"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
const ErrorMessage_1 = require("../utils/ErrorMessage");
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserService_1.UserService.createUser(req.body);
                res.sendStatus(200);
            }
            catch (err) {
                console.log(err);
                res.statusCode = 404;
                res.send((0, ErrorMessage_1.defaultError)({}));
            }
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserService_1.UserService.getUser(req.query);
                res.json(user);
            }
            catch (err) {
                console.log(err);
                res.statusCode = 404;
                res.send((0, ErrorMessage_1.defaultError)({}));
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserService_1.UserService.updateUser(req.body);
                res.sendStatus(200);
            }
            catch (err) {
                console.log(err);
                res.statusCode = 404;
                res.send((0, ErrorMessage_1.defaultError)({}));
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserService_1.UserService.deleteUser(req.body);
                res.sendStatus(200);
            }
            catch (err) {
                console.log(err);
                res.statusCode = 404;
                res.send((0, ErrorMessage_1.defaultError)({}));
            }
        });
    }
}
exports.UserController = UserController;
