import { IEventsState, IEventActionType, IEventAction } from '../model/IEventType'

const initailState: IEventsState = {
    eventList: [],
    event: undefined,
    loading: false,
    error: undefined
}

export function EventReducer(state: IEventsState = initailState, action: IEventAction): IEventsState {
    const { type, payload } = action

    switch(type){

        // get all event
        case IEventActionType.GET_ALL_EVENT_START:
            return {
                ...state,
                loading: true,
                error: undefined
            }
        case IEventActionType.GET_ALL_EVENT_SUCESS:
            return{
                ...state,
                loading: false,
                eventList: payload
            }
        case IEventActionType.GET_ALL_EVENT_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
        
        // get event detail
        case IEventActionType.GET_EVENT_DETAIL_START:
            return{
                ...state,
                loading: true,
                error: undefined
            }

        case IEventActionType.GET_EVENT_DETAIL_SUCCESS:
            return{
                ...state,
                loading: false,
                event: payload
            }

        case IEventActionType.GET_EVENT_DETAIL_ERROR:
            return{
                ...state,
                loading: false,
                error: payload
            }

        // add event
        case IEventActionType.ADD_NEW_EVENT_START:
            return{
                ...state,
                loading: true,
                error: undefined
            }

        case IEventActionType.ADD_NEW_EVENT_SUCESS:
            return{
                ...state,
                loading: false,
                event: payload
            }

        case IEventActionType.ADD_NEW_EVENT_ERROR:
            return{
                ...state,
                loading: false,
                error: payload
            }
            
            
        // case IEventActionType.DELETE_EVENT:
        //     return{
        //         ...state,
        //         eventList: action.payload
        //     }
        
        // case IEventActionType.UPDATE_EVENT:
        //     return {
        //         ...state,
        //         eventList: action.payload
        //     }

        default:
            return state
    }
}