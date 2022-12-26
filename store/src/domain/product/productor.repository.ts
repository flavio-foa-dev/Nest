import { Injectable } from "@nestjs/common"

type Product = {
  name: string,
  price: number
  id?: number
}

@Injectable()
export class ProductRepository {
  private products = new Array()

  getproductAll(): Array<Product> {
    return this.products
  }

  async save(product: Product): Promise<void> {
    const id = Math.ceil(Math.random() * 1000)
    this.products.push(Object.assign(product, {id: id}))
  }

  async getByName(name: string){
    const result = await this.products.find(product => product.name === name)
    return result !== undefined
  }

}