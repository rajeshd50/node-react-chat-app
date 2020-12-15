import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { MessageModule } from './message/message.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { fileUploadDestination } from './_config';

const path = require('path')

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', fileUploadDestination),
    }),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: path.join(__dirname, '..', path.sep, 'mydb.sqlite'),
      database: 'test',
      autoLoadModels: true,
    }),
    UserModule,
    AuthModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
