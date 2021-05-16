export interface IUser {
    id?: string
    fname: string
    lname: string
    nickname: string
    email: string
    password: string
    profileImage?: string
    birthdate: any
}

export interface IUserState{
    userInfo?: IUser
    loading: boolean
    error?: Error
    getsuccess?: boolean
    addsuccess?: boolean
    logined?: boolean
}

export enum IUserActionType{

    GET_USER_START =  'GET_USER_START',
    GET_USER_SUCCESS = 'GET_USER_SUCCESS',
    GET_USER_ERROR = 'GET_USER_ERROR',

    ADD_USER_START = 'ADD_USER_START',
    ADD_USER_SUCCESS = 'ADD_USER_SUCCESS',
    ADD_USER_END = 'ADD_USER_END',
    ADD_USER_ERROR = 'ADD_USER_ERROR'

}

export type UserAction = IUserActionType

export interface IUserAction{

    type: IUserActionType;
    payload?:  any;

}