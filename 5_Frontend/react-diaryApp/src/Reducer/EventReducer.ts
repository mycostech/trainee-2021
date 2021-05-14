import { IEventsState, IEventActionType, IEventAction } from '../model/IEventType'

const initailState: IEventsState = {
    eventList: [],
    event: undefined,
    loading: false,
    error: undefined,
    addSuccess: false,
    getSuccess: false,
    deleteSuccess: false
}

export function EventReducer(state: IEventsState = initailState, action: IEventAction): IEventsState {
    const { type, payload } = action

    switch(type){

        // get all event
        case IEventActionType.GET_ALL_EVENT_START:
            return {
                ...state,
                loading: true,
                error: undefined,
                getSuccess: false
            }
        case IEventActionType.GET_ALL_EVENT_SUCESS:
            return{
                ...state,
                loading: false,
                eventList: payload,
                getSuccess: true
            }
        case IEventActionType.GET_ALL_EVENT_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
                getSuccess: false
            }
        
        // get event detail
        case IEventActionType.GET_EVENT_DETAIL_START:
            return{
                ...state,
                loading: true,
                error: undefined,
                getSuccess: false
            }

        case IEventActionType.GET_EVENT_DETAIL_SUCCESS:
            return{
                ...state,
                loading: false,
                event: payload,
                getSuccess: true
            }

        case IEventActionType.GET_EVENT_DETAIL_ERROR:
            return{
                ...state,
                loading: false,
                error: payload,
                getSuccess: false
            }

        // add event
        case IEventActionType.ADD_NEW_EVENT_START:
            return{
                ...state,
                loading: true,
                error: undefined,
                addSuccess: false
            }

        case IEventActionType.ADD_NEW_EVENT_SUCESS:
            return{
                ...state,
                loading: false,
                event: payload,
                addSuccess: true
            }

        case IEventActionType.ADD_NEW_EVENT_ERROR:
            return{
                ...state,
                loading: false,
                error: payload,
                addSuccess: false
            }
        

        // edit event !!!
        case IEventActionType.UPDATE_EVENT_START:
            return {
                ...state,
                loading: true,
                error: undefined,
                updateSuccess: false
            }
        
        case IEventActionType.UPDATE_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                event: payload,
                updateSuccess: true
            }

        case IEventActionType.UPDATE_EVENT_ERROR:
            return{
                ...state,
                loading: false,
                error: payload,
                updateSuccess: false
            }


        // delete event
        case IEventActionType.DELETE_EVENT_START:
            return{
                ...state,
                loading: true,
                error: undefined,
                deleteSuccess: false
            }
        
        case IEventActionType.DELETE_EVENT_SUCCESS:
            return{
                ...state,
                loading: false,
                event: payload,
                eventList: state.eventList.filter(i => i.id !== payload.id),
                deleteSuccess: true
            }

        case IEventActionType.DELETE_EVENT_ERORR:
            return{
                ...state,
                loading: false,
                error: payload,
                deleteSuccess: false
            }


        default:
            return state
    }
}