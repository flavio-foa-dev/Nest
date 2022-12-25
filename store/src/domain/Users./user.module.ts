import { Module } from "@nestjs/common";
import { EmailUniqueValidator} from "src/helpers/validations/UserEmailUnique";
import { UserController } from "./user.controller";
import { UserRepository } from "./users.repository";

@Module({
  controllers:[UserController],
  providers: [UserRepository, EmailUniqueValidator],
})
export class UserModule {}