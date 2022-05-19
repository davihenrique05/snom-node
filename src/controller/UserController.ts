import { Request, Response} from 'express';
import { IGetUserFilter } from '../interface/IGetUserFilter';
import { TypedRequestBody, TypedRequestQuery } from '../interface/TypedRequest';
import { User } from '../model/User';
import { UserService } from '../services/UserService';
import { defaultError } from '../utils/ErrorMessage';

export class UserController {

    async createUser(req: Request, res: Response) {
        return res.send('teste');
    }

    async getUser(req: TypedRequestQuery<IGetUserFilter>, res: Response) {
        const userService = new UserService();
        try{
            const user = await userService.getUser(req.query);
            res.json(user);
        }catch(err){
            console.log(err);
            res.statusCode = 404;
            res.send(defaultError({}));
        }
    }

    async updateUser(req: TypedRequestBody<Partial<User>>, res: Response) {
        const userService = new UserService();
        try{
            await userService.updateUser(req.body);
            res.sendStatus(200);
        }catch(err){
            console.log(err);
            res.statusCode = 404;
            res.send(defaultError({}));
        }
    }

    async deleteUser(req: Request, res: Response) {
        return res.send('teste');
    }
}