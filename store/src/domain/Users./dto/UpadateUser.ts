import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { IsEmailUnique } from 'src/helpers/validations/UserEmailUnique';

export class UpadatedUserDTO {
  @IsOptional()
  id?: string;

  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsEmail()
  @IsEmailUnique({ message: 'The email already exists' })
  @IsOptional()
  email: string;

  @MinLength(8)
  @IsOptional()
  password: string;
}
