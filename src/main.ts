import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { Logger2Middleware } from './middleware/logger2.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //允许跨域
  app.use(new Logger2Middleware().use); //全局中间件
  await app.listen(3000);
}
bootstrap();
