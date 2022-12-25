import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import console from 'console';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // transform json createt DTO
      whitelist: true, // ignor props fora DTS discreta
      forbidNonWhitelisted: true // lancar error
    })
  )
  await app.listen(3000);
}
bootstrap();
