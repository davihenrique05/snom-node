import {Request, Response} from 'express';
import { UserService } from '../services/UserService';

export class UserController {

    public login(req: Request, res: Response) {
        return res.send('teste');
    }
    async getAllUsers(req: Request, res: Response) {
        const userService = new UserService();
        const user = await userService.getUser();
        res.json(user);
    }
    async getUserById(req: Request, res: Response) {
        const { id } = req.params;
        
        const userService = new UserService();
        const user = await userService.getUser(parseInt(id));
        res.json(user);
    }
    public getUserEmblems(req: Request, res: Response) {
        return res.send('teste');
    }
    public createUser(req: Request, res: Response) {
        return res.send('teste');
    }
    public updateUser(req: Request, res: Response) {
        return res.send('teste');
    }
    public deleteUser(req: Request, res: Response) {
        return res.send('teste');
    }
}