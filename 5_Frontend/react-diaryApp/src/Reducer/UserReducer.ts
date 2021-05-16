import { IUserState, IUserActionType, IUserAction } from '../model/IUserType';

const initailState: IUserState = {
    userInfo: undefined,
    loading: false,
    error: undefined,
    getsuccess: false,
    addsuccess: false
}

export function UserReducer(state: IUserState = initailState, action: IUserAction): IUserState{
    
    const { type, payload} = action

    switch(type){

        case IUserActionType.GET_USER_START:
            return {
                ...state,
                getsuccess: false,
                loading: true,
                error: undefined
            }
        

        case IUserActionType.GET_USER_SUCCESS:
            return {
                ...state,
                userInfo: payload,
                loading: false,
                getsuccess: true
            }

        case IUserActionType.GET_USER_ERROR:
            return{
                ...state,
                userInfo: payload,
                loading: true,
                getsuccess: false
            }

        case IUserActionType.ADD_USER_START:
            return{
                ...state,
                addsuccess: false,
                loading: true,
                error: undefined
            }
        
        case IUserActionType.ADD_USER_SUCCESS:
            return {
                ...state,
                userInfo: payload,
                loading: false,
                addsuccess: true
            }
            
        case IUserActionType.ADD_USER_END:
            return{
                ...state,
                addsuccess: false
            }

        case IUserActionType.ADD_USER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                addsuccess: false
            }

        default:
            return state
    }
}