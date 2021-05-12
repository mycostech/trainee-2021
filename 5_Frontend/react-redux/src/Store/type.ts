export interface User {
    id?: number;
    title: string;
    body: string;
    userId: number;
}

export interface UserState {
    userList: User[];
    loading: boolean;
}

export enum UserActionType {
    GET_ALL_USER = "GET_ALL_USER",
    ADD_NEW_USER = "ADD_NEW_USER",
    UPDATE_USER = "UPDATE_USER",
    DELETE_USER = "DELETE_USER"
}

export type UserAction = UserActionType

export interface UserActionInterface {
    type: UserActionType;
    payload: any;
}