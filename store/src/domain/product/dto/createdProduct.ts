import { IsNotEmpty, IsNumber } from "class-validator";
import { IsProductNameUnique } from "src/helpers/validations/ProductNameUnique";

export class CreateproductDTO {

  @IsNotEmpty()
  @IsProductNameUnique({message: "Product Name already exists"})
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}