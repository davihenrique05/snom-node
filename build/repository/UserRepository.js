"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const dataSource_1 = require("../dataSource");
const User_1 = require("../model/User");
exports.UserRepository = dataSource_1.AppDataSource.getRepository(User_1.User).extend({
    verifyLogin() { }
});
