import { IUserState, IUserActionType, IUserAction } from '../model/IUserType';

const initailState: IUserState = {
    userInfo: undefined,
    loading: false,
    error: undefined,
    success: false
}

export function UserReducer(state: IUserState = initailState, action: IUserAction): IUserState{
    
    const { type, payload} = action

    switch(type){

        case IUserActionType.GET_USER_START:
            return {
                ...state,
                userInfo: payload,
                loading: true,
                error: undefined
            }
        

        case IUserActionType.GET_USER_SUCCESS:
            return {
                ...state,
                userInfo: payload,
                loading: false,
                success: true
            }

        case IUserActionType.GET_USER_ERROR:
            return{
                ...state,
                userInfo: payload,
                loading: true,
                success: false
            }

        default:
            return state
    }
}