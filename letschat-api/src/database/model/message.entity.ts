import { Column, Model, Table, Unique, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Users from './user.entity';

@Table
export default class Message extends Model<Message> {
  @Column
  text: string;

  @ForeignKey(() => Users)
  @Column
  senderId: number;

  @ForeignKey(() => Users)
  @Column
  receiverId: number;

  @BelongsTo(() => Users)
  sender_details: Users;
  
  @BelongsTo(() => Users)
  receiver_details: Users;
}