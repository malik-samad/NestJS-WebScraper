import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.getHttpAdapter().getInstance().disable('X-Powered-By');
  app.setGlobalPrefix('api');

  await app.listen(3001);
}

bootstrap();
