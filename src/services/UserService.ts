import { IGetUserFilter } from "../interface/IGetUserFilter";
import { User } from "../model/User";
import { UserRepository } from "../repository/UserRepository";


export class UserService {

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
        user.icon = "user_pic001";
        user.permission_id = 3;

        return UserRepository.save(user);
    };

    public static deleteUser() :void{};

}