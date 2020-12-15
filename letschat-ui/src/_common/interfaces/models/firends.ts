import { User } from "./user";
import { Model } from "./_common";

export interface Friends extends Model {
  userId: number,
  friendId: number,
  last_message_time: string,
  user_details?: User;
  friend_details?: User;
}