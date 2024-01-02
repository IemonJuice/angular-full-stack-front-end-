import {UserModel} from "./user.model";

export interface UserResponse{
  user:UserModel
  token:string;
}
