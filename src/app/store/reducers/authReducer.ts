import {createReducer, on} from "@ngrx/store";
import {AuthState} from "../models/state";
import {logoutAction, successLoginAction, successRegisterAction} from "../actions/auth.actions";

const initialState: AuthState = {
  isAuthenticated: false,
  user: {}
}

export const authReducer = createReducer(initialState,
  on(successLoginAction, (state: AuthState, {isLogin, user}) => {
    return {isAuthenticated: isLogin, user: user} as AuthState
  }),
  on(successRegisterAction, (state: AuthState, {isLogin, user}) => {
    return {isAuthenticated: isLogin, user: user} as AuthState
  }),
  on(logoutAction, (state) => initialState)
)
