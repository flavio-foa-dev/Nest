import { Injectable } from "@nestjs/common"

type Product = {
  name: string,
  price: number
}

@Injectable()
export class ProductRepository {
  private product = new Array()

  getproductAll(): Array<Product> {
    return this.product
  }

  async save(product: Product): Promise<void> {
    this.product.push(product)
  }

}