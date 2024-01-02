import {createAction, props} from "@ngrx/store";
import {UserModel} from "../../core/models/user.model";

export const successLoginAction = createAction('[Login page] success', props<{ isLogin: boolean, user: UserModel }>())
export const successRegisterAction = createAction('[Register page] success', props<{ isLogin: boolean, user: UserModel }>())
export const logoutAction = createAction('[Auth] logout')
