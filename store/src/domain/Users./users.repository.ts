import { Injectable } from "@nestjs/common";

type User = {
  name: string,
  email: string,
  password: string

}

@Injectable()
export class UserRepository {
  private users = new Array();


  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  getUsersAll(): Array<User> {
    return this.users;
  }

  async getUsersByEmail(email: string){
    const result = this.users.find(user => user.email === email);
    return result !== undefined
  }
}