export interface IEvent {
    dateTime: any;
    eventName: string;
    memo: string;
}

export interface IEventState{
    eventList: IEvent[];
    loading: boolean;
}


export enum IEventActionType {
    GET_ALL_EVENT = "GET_ALL_EVENT",
    GET_EVENT_DETAIL = "GET_EVENT_DETAIL",
    ADD_NEW_EVENT = "ADD_NEW_EVENT",
    UPDATE_EVENT = "UPDATE_EVENT",
    DELETE_EVENT = "DELETE_EVENT",
    SHOW_LOADING = "SHOW_LOADING"
}

export type EventAction = IEventActionType

export interface IEventAction {
    type: IEventActionType;
    payload?: any;
}