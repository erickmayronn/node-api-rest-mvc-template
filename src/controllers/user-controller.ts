import { Request, Response } from 'express';
import { UserService } from '@/services/user-service';
import { UserRepository } from '@/repositories/user-repository';

const repository = new UserRepository();
const service = new UserService(repository);

export class UserController {
  async getAll(req: Request, res: Response) {
    const users = await service.getUsers();
    res.json(users);
  }

  async create(req: Request, res: Response) {
    const user = await service.createUser(req.body);
    res.status(201).json(user);
  }
}
