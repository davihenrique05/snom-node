"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const Permission_1 = require("../model/Permission");
const UserRepository_1 = require("../repository/UserRepository");
class UserService {
    login() { }
    ;
    getConqueredEmblemCount() { }
    ;
    static getUser(filter) {
        const filterId = filter.id ? parseInt(filter.id) : undefined;
        return UserRepository_1.UserRepository.find({
            where: {
                id: filterId,
                name: filter.name,
                email: filter.email,
            },
            relations: ['permission']
        });
    }
    ;
    static updateUser(user) {
        if (!user.id)
            throw new Error();
        return UserRepository_1.UserRepository.save(user);
    }
    ;
    static createUser(user) {
        if (!user.name || !user.email || !user.password)
            throw new Error();
        if (!user.type)
            user.type = "aprendiz";
        user.level = 1;
        user.isUserActive = true;
        user.experience = 0;
        user.icon = "user_pic001";
        user.permission = new Permission_1.Permission();
        user.permission.id = 3;
        return UserRepository_1.UserRepository.insert(user);
    }
    ;
    static deleteUser() { }
    ;
}
exports.UserService = UserService;
