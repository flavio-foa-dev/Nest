import { Body, Controller, Get, Post } from "@nestjs/common"
import { CreateproductDTO } from "./dto/createdProduct";
import { ProductRepository } from "./productor.retpsitory";

type  Product = {
  name: string,
  price: number
}

@Controller('/product')
export class ProductorController {
  constructor(private productoRepository: ProductRepository){}

  @Post()
  async createProduct(@Body() product: CreateproductDTO):Promise<String>{
    this.productoRepository.save(product)
    return "created"
  }

  @Get()
  getProductAll(){
    return this.productoRepository.getproductAll()
  }

}