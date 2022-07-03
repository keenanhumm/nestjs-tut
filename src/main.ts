import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // return only validated properties on the response object
      forbidNonWhitelisted: true, // disallow unrecognized properties on req body
      transform: true, // auto-transform req payload to be instance of dto
    }),
  );
  await app.listen(3000);
}
bootstrap();
