import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { ProductRepository } from "src/domain/product/productor.repository";


@Injectable()
@ValidatorConstraint({ async: true })
export class ProductNameUniqueValidator implements ValidatorConstraintInterface {

  constructor(private productRepository: ProductRepository) {}

  async validate(valueName: any, validationArguments?: ValidationArguments): Promise<boolean> {
    const productNameUnique = await this.productRepository.getByName(valueName);
    return !productNameUnique
  }
}

export const IsProductNameUnique = (optionsValidetion: ValidationOptions)=> {
  return (object: Object, propert: string)=> {
    registerDecorator({
      target: object.constructor,
      propertyName: propert,
      options: optionsValidetion,
      constraints: [],
      validator: ProductNameUniqueValidator
    })
  }
}