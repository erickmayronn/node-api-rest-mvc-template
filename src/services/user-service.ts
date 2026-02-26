import { UserRepository } from '@/repositories/user-repository';
import { User } from '@/models/user-model';

export class UserService {
  constructor(private repository: UserRepository) {}

  async getUsers(): Promise<User[]> {
    return this.repository.findAll();
  }

  async createUser(data: User): Promise<User> {
    if (!data.email.includes('@')) {
      throw new Error('Invalid email');
    }

    return this.repository.create(data);
  }
}
