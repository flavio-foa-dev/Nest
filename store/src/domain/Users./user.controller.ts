import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatedUserDTO } from './dto/createdUser';
import { IUserEntity } from './interfaces/User.entity';
import { UserRepository } from './users.repository';
import { v4 as uuid } from 'uuid';
import { GetUsersAllDTO } from './dto/GetUserAllDTO';
import { UpadatedUserDTO } from './dto/UpadateUser';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/ban-types
  async createUser(@Body() user: CreatedUserDTO): Promise<Object> {
    const userEntity = new IUserEntity();
    userEntity.id = uuid();
    userEntity.name = user.name;
    userEntity.email = user.email;
    userEntity.password = user.password;
    this.userRepository.save(userEntity);
    return {
      id: userEntity.id,
      name: userEntity.name,
      message: 'created',
    };
  }

  @Get()
  async getUserAll() {
    const userAll = await this.userRepository.getUsersAll();
    const parseUsers = userAll.map((user) => {
      return (user = new GetUsersAllDTO(user.id, user.name));
    });
    return parseUsers;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() user: UpadatedUserDTO) {
    const userUpdate = await this.userRepository.updatedUser(id, user);

    return { user: userUpdate, message: 'Updated user successfully' };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const deletedUser = await this.userRepository.deleteUser(id);

    return { user: deletedUser, message: 'User removed successfully' };
  }
}
