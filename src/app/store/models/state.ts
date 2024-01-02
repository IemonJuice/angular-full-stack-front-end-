import {UserModel} from "../../core/models/user.model";

export interface AuthState {
  isAuthenticated:boolean;
  user:UserModel | { }
}
