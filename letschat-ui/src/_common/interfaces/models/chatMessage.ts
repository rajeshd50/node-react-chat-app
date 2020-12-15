import { User } from "./user";
import { Model } from "./_common";

export interface ChatMessage extends Model {
  text: string,
  senderId: number,
  receiverId: number,
  sender_details?: Omit<User, 'session' | 'friends'>,
  receiver_details?: Omit<User, 'session' | 'friends'>,
}