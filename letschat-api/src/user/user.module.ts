import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import Users from 'src/database/model/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';
import * as path from 'path'
import * as multer from 'multer'
import { nanoid } from 'nanoid'
import { fileUploadDestination } from 'src/_config';

@Module({
  imports: [
    MulterModule.register({
      dest: path.join(__dirname, '..', path.sep, fileUploadDestination),
      preservePath: true,
      storage: multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, `${fileUploadDestination}/`)
        },
        filename: function (req, file, cb) {
          cb(null, nanoid() + '_' + Date.now() + path.extname(file.originalname))
        }
      })
    }),
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([Users])
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
