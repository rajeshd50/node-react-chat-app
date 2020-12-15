import { Model } from 'sequelize-typescript';
import Users from './user.entity';
export default class Session extends Model<Session> {
    token: string;
    userId: number;
    user_details: Users;
}
