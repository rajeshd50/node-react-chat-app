import { Column, Model, Table, Unique, HasOne, HasMany, Index, DefaultScope, DataType } from 'sequelize-typescript';
import { serverUrl, fileUploadDestination } from 'src/_config';
import Friends from './friends.entity';
import Session from './session.entity';

@DefaultScope(() => ({
  attributes: {
    exclude: ['password']
  }
}))
@Table
export default class Users extends Model<Users> {
  @Column
  name: string;

  @Column
  password: string;

  @Index({
    name: 'email-index',
    type: 'UNIQUE',
    unique: true,
  })
  @Unique({
    name: 'Email',
    msg: 'Email already exists'
  })
  @Column
  email: string;

  @Column
  image: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @Column({ defaultValue: false })
  isOnline: boolean;

  @HasOne(() => Session)
  session: Session

  @HasMany(() => Friends, 'userId')
  friends: Users[]

  @Column(DataType.VIRTUAL)
  get imageFullPath() {
    return this.getDataValue('image') ? `${serverUrl}${this.getDataValue('image')}` : ''
  }
}