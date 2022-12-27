import { Injectable } from '@nestjs/common';
import { IUserEntity } from './interfaces/User.entity';

@Injectable()
export class UserRepository {
  private users: IUserEntity[] = [];

  async save(user: IUserEntity): Promise<void> {
    this.users.push(user);
  }

  async getUsersAll(): Promise<IUserEntity[]> {
    return this.users;
  }

  async getUsersByEmail(email: string) {
    const result = this.users.find((user) => user.email === email);
    return result !== undefined;
  }

  async updatedUser(id: string, userUpadate: Partial<IUserEntity>) {
    const userToUpadated = this.users.find((user) => user.id === id);

    if (!userToUpadated) {
      throw new Error('User does not exist');
    }

    Object.entries(userUpadate).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      userToUpadated[key] = value;
    });
  }
}
