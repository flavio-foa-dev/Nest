import { Module } from '@nestjs/common';
import { ProductorModule } from './domain/product/productor.module';
import { UserModule } from './domain/Users./user.module';




@Module({
  imports: [UserModule, ProductorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
