import { Request, Response} from 'express';
import { IGetUserFilter } from '../interface/IGetUserFilter';
import { TypedRequestBody, TypedRequestQuery } from '../interface/TypedRequest';
import { User } from '../model/User';
import { UserService } from '../services/UserService';
import { defaultError } from '../utils/ErrorMessage';

export class UserController {

    async createUser(req: TypedRequestBody<Partial<User>>, res: Response) {
        try{
            await UserService.createUser(req.body);
            res.sendStatus(200);
        }catch(err){
            console.log(err);
            res.statusCode = 404;
            res.send(defaultError({}));
        }
    }

    async getUser(req: TypedRequestQuery<IGetUserFilter>, res: Response) {
        try{
            const user = await UserService.getUser(req.query);
            res.json(user);
        }catch(err){
            console.log(err);
            res.statusCode = 404;
            res.send(defaultError({}));
        }
    }

    async updateUser(req: TypedRequestBody<Partial<User>>, res: Response) {
        try{
            await UserService.updateUser(req.body);
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