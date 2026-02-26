import { User } from '@/models/user-model';

export class UserRepository {
  private users: User[] = [];

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }
}
