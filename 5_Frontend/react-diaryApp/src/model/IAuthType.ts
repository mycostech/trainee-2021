import { IUser } from "./IUserType";


export interface IAuthState {
    logingIn: boolean,
    user?: IUser,
    error?: Error,
    loading?: boolean
}

export enum IAuthActionType {

    LOGIN_REQUEST = 'LOGIN_REQUES',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
    LOGOUT = 'LOGOUT'

}

export type AuthAction = IAuthActionType

export interface IAuthAction {
    type: IAuthActionType;
    payload?: any
}