import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
  private users = new Array();


  async save(user):Promise<void> {
    this.users.push(user);
  }

  getUsersAll(){
    return this.users;
  }
}