export interface LoginReq {
  email: string;
  password: string;
}
export interface RegisterReq {
  email: string;
  password: string;
  name: string;
}
export interface UploadProfilePicReq extends FormData {
}
export interface SearchUserReq {
  text: string;
}
export interface MessageSendReq {
  text: string;
  to: number;
}
export interface MessageListReq {
  user: number;
  limit: number;
  offset: number;
}