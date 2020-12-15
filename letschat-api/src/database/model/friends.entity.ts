import { Column, Model, Table, Unique, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Users from './user.entity';

@Table
export default class Friends extends Model<Friends> {
  @ForeignKey(() => Users)
  @Column
  userId: number;

  @ForeignKey(() => Users)
  @Column
  friendId: number;

  @Column
  last_message_time: Date;

  @BelongsTo(() => Users, 'userId')
  user_details: Users;
  
  @BelongsTo(() => Users, 'friendId')
  friend_details: Users;
}