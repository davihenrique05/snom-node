"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.CLEARDB_HOST,
    port: 3306,
    username: process.env.CLEARDB_USERNAME,
    password: process.env.CLEARDB_PASSWORD,
    database: process.env.CLEARDB_DATABASE,
    entities: [],
    synchronize: true,
    logging: false
});
