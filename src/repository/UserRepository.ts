import { Repository } from "typeorm";
import { AppDataSource } from "../dataSource";
import { User } from "../model/User";

export const UserRepository = AppDataSource.getRepository(User).extend(
    {
        verifyLogin() :void {}
    }
)