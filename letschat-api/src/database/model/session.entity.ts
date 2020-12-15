import { Column, Model, Table, Unique, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Users from './user.entity';

@Table
export default class Session extends Model<Session> {

  @Unique
  @Column
  token: string;

  @ForeignKey(() => Users)
  @Column
  userId: number;

  @BelongsTo(() => Users)
  user_details: Users;
}