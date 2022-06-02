import { IGetUserFilter } from "../interface/IGetUserFilter";
import { Permission } from "../model/Permission";
import { User } from "../model/User";
import { UserRepository } from "../repository/UserRepository";


export abstract class UserService {

    public login() :void{};
    public getConqueredEmblemCount() :void{};
    public static getUser(filter: IGetUserFilter) {
        const filterId = filter.id ? parseInt(filter.id) : undefined;

        return UserRepository.find({
            where: { 
                id: filterId,
                name: filter.name,
                email: filter.email,
             },
            relations: [ 'permission' ]
        })
    };

    public static updateUser(user : Partial<User>){
        if(!user.id) throw new Error();

        return UserRepository.save(user);
    };

    public static createUser(user : Partial<User>){
        if(!user.name || !user.email || !user.password) throw new Error();
        if(!user.type)
            user.type = "aprendiz";
        
        user.level = 1;
        user.isUserActive = true;
        user.experience = 0;
        user.icon = "/img/profile/level1.svg";
        user.permission = new Permission();
        user.permission.id = 3;

        return UserRepository.insert(user);
    };

    public static deleteUser(user : Partial<User>) {
        if(!user.id) throw new Error();

        return UserRepository.delete(user);
    };

}