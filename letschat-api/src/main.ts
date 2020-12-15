import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs'

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/letschatapi.appswithfun.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/letschatapi.appswithfun.com/fullchain.pem'),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  // const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: '*',
    methods: 'OPTION,PUT,POST,GET,DELETE'
  })
  await app.listen(4000);
}
bootstrap();
