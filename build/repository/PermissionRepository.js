"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionRepository = void 0;
const dataSource_1 = require("../dataSource");
const Permission_1 = require("../model/Permission");
exports.PermissionRepository = dataSource_1.AppDataSource.getRepository(Permission_1.Permission).extend({});
