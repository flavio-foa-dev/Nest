import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateproductDTO {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}