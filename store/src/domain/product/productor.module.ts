import { Module } from "@nestjs/common";
import { ProductorController } from "./product.controller";
import { ProductRepository } from "./productor.retpsitory";

@Module({
  controllers:[ProductorController],
  providers:[ProductRepository],
})
export class ProductorModule {}