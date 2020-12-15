import { Model } from 'sequelize-typescript';
import Users from './user.entity';
export default class Message extends Model<Message> {
    text: string;
    senderId: number;
    receiverId: number;
    sender_details: Users;
    receiver_details: Users;
}
