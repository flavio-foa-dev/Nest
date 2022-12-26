import { Module } from "@nestjs/common";
import { ProductNameUniqueValidator } from "src/helpers/validations/ProductNameUnique";
import { ProductorController } from "./product.controller";
import { ProductRepository } from "./productor.repository";

@Module({
  controllers:[ProductorController],
  providers:[ProductRepository, ProductNameUniqueValidator]
})
export class ProductorModule {}