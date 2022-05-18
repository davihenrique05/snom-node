import { User } from "../model/User";
import { UserRepository } from "../repository/UserRepository";


export class UserService {

    public login() :void{};
    public getConqueredEmblemCount() :void{};
    public getUser(id?: number) {

        return UserRepository.find({
            where: { id },
            relations: {
                permission: true,
            }
        })
    };
    public updateUser() :void{};
    public createUser() :void{};
    public deleteUser() :void{};

}