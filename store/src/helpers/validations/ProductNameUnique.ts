import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ProductRepository } from 'src/domain/product/productor.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class ProductNameUniqueValidator
  implements ValidatorConstraintInterface
{
  constructor(private productRepository: ProductRepository) {}

  async validate(
    valueName: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const productNameUnique = await this.productRepository.getByName(valueName);
    return !productNameUnique;
  }
}

export const IsProductNameUnique = (optionsValidetion: ValidationOptions) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (object: Object, propert: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propert,
      options: optionsValidetion,
      constraints: [],
      validator: ProductNameUniqueValidator,
    });
  };
};
