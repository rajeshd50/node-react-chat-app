import { Friends } from "./firends";
import { Session } from "./session";
import { Model } from "./_common";

export interface User extends Model {
  name: string,
  email: string,
  image?: string,
  imageFullPath?: string,
  isActive: boolean,
  isOnline: boolean,
  session?: Omit<Session, 'user_details'>,
  friends?: Omit<Friends, 'friend_details' | 'user_details'>[]
}