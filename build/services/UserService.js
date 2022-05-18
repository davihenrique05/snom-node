"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const UserRepository_1 = require("../repository/UserRepository");
class UserService {
    login() { }
    ;
    getConqueredEmblemCount() { }
    ;
    getUser(id) {
        return UserRepository_1.UserRepository.find({
            where: { id },
            relations: ['permission']
        });
    }
    ;
    updateUser() { }
    ;
    createUser() { }
    ;
    deleteUser() { }
    ;
}
exports.UserService = UserService;
