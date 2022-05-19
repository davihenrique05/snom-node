import { IGetUserFilter } from "../interface/IGetUserFilter";
import { User } from "../model/User";
import { UserRepository } from "../repository/UserRepository";


export class UserService {

    public login() :void{};
    public getConqueredEmblemCount() :void{};
    public getUser(filter: IGetUserFilter) {
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

    public updateUser(user : Partial<User>){
        if(!user.id) throw new Error();

        return UserRepository.save(user);
    };

    public createUser() :void{};
    public deleteUser() :void{};

}