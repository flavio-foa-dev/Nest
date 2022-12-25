import { IsEmail, IsNotEmpty, MinLength } from "class-validator";


export class CreatedUserDTO {

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}

function IsEmailUnique() {
  throw new Error("Function not implemented.");
}
