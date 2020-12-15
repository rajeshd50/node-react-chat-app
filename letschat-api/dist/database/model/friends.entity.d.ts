import { Model } from 'sequelize-typescript';
import Users from './user.entity';
export default class Friends extends Model<Friends> {
    userId: number;
    friendId: number;
    last_message_time: Date;
    user_details: Users;
    friend_details: Users;
}
