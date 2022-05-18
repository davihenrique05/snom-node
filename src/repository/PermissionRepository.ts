import { Repository } from "typeorm";
import { AppDataSource } from "../dataSource";
import { Permission } from "../model/Permission";

export const PermissionRepository = AppDataSource.getRepository(Permission).extend(
    {

    }
)