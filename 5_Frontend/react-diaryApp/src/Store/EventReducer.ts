import { IEventState, IEventActionType, IEventAction } from '../model/IEventType'

const initailState: IEventState = {
    eventList: [],
    loading: false
}

export function EventReducer(state: IEventState = initailState, action: IEventAction): IEventState {

    switch(action.type){

        case IEventActionType.GET_ALL_EVENT:
            return{
                ...state,
                eventList: action.payload
            }
        
        case IEventActionType.GET_EVENT_DETAIL:
            return{
                ...state,
                eventList: action.payload
            }

        case IEventActionType.ADD_NEW_EVENT:
            return{
                ...state,
                eventList: action.payload
            }
            
        case IEventActionType.DELETE_EVENT:
            return{
                ...state,
                eventList: action.payload
            }
        
        case IEventActionType.UPDATE_EVENT:
            return {
                ...state,
                eventList: action.payload
            }

        default:
            return state
    }
}