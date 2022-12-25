import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreatedUserDTO } from "./dto/createdUser";
import { UserRepository } from "./users.repository";

@Controller('/users')
export class UserController {
  constructor( private userRepository:UserRepository ){}



  @Post()
  async createUser(@Body() user:CreatedUserDTO): Promise<String>{
   this.userRepository.save(user)
   return "created"
  }

  @Get()
  async getUserAll(){
    return this.userRepository.getUsersAll()
  }
}