"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const UserRepository_1 = require("../repository/UserRepository");
class UserService {
    login() { }
    ;
    getConqueredEmblemCount() { }
    ;
    getUser(filter) {
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
    updateUser(user) {
        if (!user.id)
            throw new Error();
        return UserRepository_1.UserRepository.save(user);
    }
    ;
    createUser() { }
    ;
    deleteUser() { }
    ;
}
exports.UserService = UserService;
