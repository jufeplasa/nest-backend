import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes( 
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    })
   );
  const puerto = process.env.PORT || 3000;
  console.log("app corriendo en puerto : ",puerto )
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
