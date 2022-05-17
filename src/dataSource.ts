import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { Permission } from "./model/Permission";
import { User } from "./model/User";
dotenv.config();

const AppDataSource = new DataSource({
    type: "mysql",
    connectorPackage: "mysql2",
    host: process.env.JAWSDB_HOST,
    port: 3306,
    username: process.env.JAWSDB_USERNAME,
    password: process.env.JAWSDB_PASSWORD,
    database: process.env.JAWSDB_DATABASE,
    entities: [ User, Permission ],
    synchronize: true,
    logging: false
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err )
    });
export { AppDataSource };