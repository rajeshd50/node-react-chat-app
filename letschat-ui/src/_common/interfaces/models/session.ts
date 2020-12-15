import { User } from "./user";
import { Model } from "./_common";

export interface Session extends Model {
  token: string,
  userId: number,
  user_details: User,
}