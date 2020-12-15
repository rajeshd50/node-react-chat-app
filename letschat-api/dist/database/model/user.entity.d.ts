import { Model } from 'sequelize-typescript';
import Session from './session.entity';
export default class Users extends Model<Users> {
    name: string;
    password: string;
    email: string;
    image: string;
    isActive: boolean;
    isOnline: boolean;
    session: Session;
    friends: Users[];
    get imageFullPath(): string;
}
