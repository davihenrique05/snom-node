import { GetUserFilterInterface } from "../interface/GetUserFilterInterface";
import { User } from "../model/User";
import { UserRepository } from "../repository/UserRepository";


export class UserService {

    public login() :void{};
    public getConqueredEmblemCount() :void{};
    public getUser(filter: GetUserFilterInterface) {
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
    public updateUser() :void{};
    public createUser() :void{};
    public deleteUser() :void{};

}