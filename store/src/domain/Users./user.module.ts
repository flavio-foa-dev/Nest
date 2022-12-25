import { Module } from "@nestjs/common";
import { EmaiUniqueValidator} from "src/helpers/validations/UserEmailUnique";
import { UserController } from "./user.controller";
import { UserRepository } from "./users.repository";

@Module({
  controllers:[UserController],
  providers: [UserRepository, EmaiUniqueValidator],
})
export class UserModule {}