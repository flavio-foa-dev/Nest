import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "src/domain/Users./users.repository";

@Injectable()
@ValidatorConstraint({async: true})
export class EmaiUniqueValidator implements ValidatorConstraintInterface {

  constructor(private userRepository: UserRepository) {}

  async validate(valueEmail: string, validationArguments?: ValidationArguments): Promise<boolean> {
    const userEmailExist = await this.userRepository.getUsersByEmail(valueEmail);
    return !userEmailExist;
  }
}

export const IsEmailUnique = (optionsValidetion: ValidationOptions) => {
  return (object: Object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: optionsValidetion,
      constraints: [],
      validator: EmaiUniqueValidator
    });
  }
}