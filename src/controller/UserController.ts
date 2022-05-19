import {Request, Response} from 'express';
import { UserService } from '../services/UserService';

export class UserController {

    async createUser(req: Request, res: Response) {
        return res.send('teste');
    }

    async getUser(req: Request, res: Response) {
        const userService = new UserService();
        const user = await userService.getUser();
        res.json(user);
    }

    async updateUser(req: Request, res: Response) {
        return res.send('teste');
    }
    
    async deleteUser(req: Request, res: Response) {
        return res.send('teste');
    }
}