import { Injectable } from "@nestjs/common";

type User = {
  name: string,
  email: string,
  password: string,
  id?: number

}

@Injectable()
export class UserRepository {
  private users = new Array();


  async save(user: User): Promise<void> {
    const id = Math.ceil(Math.random() *1000 )
    this.users.push(Object.assign(user, { id: id }));
  }

  getUsersAll(): Array<User> {
    return this.users;
  }

  async getUsersByEmail(email: string){
    const result = this.users.find(user => user.email === email);
    return result !== undefined
  }
}