import { forwardRef, Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import Message from 'src/database/model/message.entity';
import Friends from 'src/database/model/friends.entity';
import { AuthModule } from 'src/auth/auth.module';
import { MessageGateway } from './message.gateway';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([Message, Friends])
  ],
  providers: [MessageService, MessageGateway],
  controllers: [MessageController]
})
export class MessageModule {}
