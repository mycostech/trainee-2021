export interface IEvent {
    id?: number;
    dateTime: any;
    eventName: string;
    memo: string;
    userId?: string;
}

export interface IEventsState{
    eventList: IEvent[];
    loading: boolean;
    event?: IEvent;
    error?: Error;
}


export enum IEventActionType {
    GET_ALL_EVENT_START = "GET_ALL_EVENT_START",
    GET_ALL_EVENT_SUCESS = "GET_ALL_EVENT_SUCESS",
    GET_ALL_EVENT_ERROR = "GET_ALL_EVENT_ERROR",

    GET_EVENT_DETAIL_START = "GET_EVENT_DETAIL_START",
    GET_EVENT_DETAIL_SUCCESS = "GET_EVENT_DETAIL_SUCCESS",
    GET_EVENT_DETAIL_ERROR = "GET_EVENT_DETAIL_ERROR",

    ADD_NEW_EVENT_START = "ADD_NEW_EVENT_START",
    ADD_NEW_EVENT_SUCESS = "ADD_NEW_EVENT_SUCCESS",
    ADD_NEW_EVENT_ERROR = "ADD_NEW_EVENT_ERROR",

    UPDATE_EVENT_START = "UPDATE_EVENT_START",
    UPDATE_EVENT_SUCCESS = "UPDATE_EVENT_SUCCESS",
    UPDATE_EVENT_ERROR = "UPDATE_EVENT_ERROR",

    DELETE_EVENT = "DELETE_EVENT",

    SHOW_LOADING = "SHOW_LOADING"
}

export type EventAction = IEventActionType

export interface IEventAction {
    type: IEventActionType;
    payload?: any;
}