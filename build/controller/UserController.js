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
class UserController {
    login(req, res) {
        return res.send('teste');
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = new UserService_1.UserService();
            const user = yield userService.getUser();
            res.json(user);
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const userService = new UserService_1.UserService();
            const user = yield userService.getUser(parseInt(id));
            res.json(user);
        });
    }
    getUserEmblems(req, res) {
        return res.send('teste');
    }
    createUser(req, res) {
        return res.send('teste');
    }
    updateUser(req, res) {
        return res.send('teste');
    }
    deleteUser(req, res) {
        return res.send('teste');
    }
}
exports.UserController = UserController;
