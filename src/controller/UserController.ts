import { Request, Response} from 'express';
import { GetUserFilterInterface } from '../interface/GetUserFilterInterface';
import { TypedRequestQuery } from '../interface/TypedRequest';
import { UserService } from '../services/UserService';
import { defaultError } from '../utils/ErrorMessage';

export class UserController {

    async createUser(req: Request, res: Response) {
        return res.send('teste');
    }

    async getUser(req: TypedRequestQuery<GetUserFilterInterface>, res: Response) {
        const userService = new UserService();
        try{
            const user = await userService.getUser(req.query);
            res.json(user);
        }catch(err){
            console.log(err);
            res.statusCode = 404;
            res.send(defaultError());
        }
    }

    async updateUser(req: Request, res: Response) {
        return res.send('teste');
    }

    async deleteUser(req: Request, res: Response) {
        return res.send('teste');
    }
}