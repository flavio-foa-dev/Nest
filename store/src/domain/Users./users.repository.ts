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

  private async getUserById(id: string) {
    const result = this.users.find((user) => user.id === id);

    if (!result) {
      throw new Error('User does not exist');
    }
    return result;
  }

  async updatedUser(id: string, userUpadate: Partial<IUserEntity>) {
    const user = await this.getUserById(id);

    Object.entries(userUpadate).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      user[key] = value;
    });
    return user;
  }

  async deleteUser(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
    const userDeleted = this.getUserById(id);

    return userDeleted;
  }
}
