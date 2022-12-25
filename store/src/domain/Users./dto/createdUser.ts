import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { IsEmailUnique } from "src/helpers/validations/UserEmailUnique";


export class CreatedUserDTO {

  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsEmailUnique({ message: "The email already exists"})
  email: string;

  @MinLength(8)
  password: string;
}


