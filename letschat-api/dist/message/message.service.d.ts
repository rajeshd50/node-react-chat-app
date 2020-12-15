import { Sequelize } from 'sequelize-typescript';
import Friends from 'src/database/model/friends.entity';
import Message from 'src/database/model/message.entity';
import { CreateMessageDto } from './dto/CreateMessage.dto';
export declare class MessageService {
    private readonly messageModel;
    private readonly friendsModel;
    private readonly sequelize;
    constructor(messageModel: typeof Message, friendsModel: typeof Friends, sequelize: Sequelize);
    createMessage(data: CreateMessageDto): Promise<any>;
    friendList(id: number): Promise<any>;
    messageList(id: number, user: number, limit?: number, offset?: number): Promise<any>;
}
