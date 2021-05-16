import {IAuthState, IAuthActionType, IAuthAction} from '../model/IAuthType';

const initailState: IAuthState = {
    logingIn : false,
    user: undefined,
    error: undefined,
    loading: false
}


export function AuthReducer(state: IAuthState = initailState, action: IAuthAction): IAuthState{

    const { type, payload } = action

    switch(type){

        case IAuthActionType.LOGIN_REQUEST:
            return{
                loading: true,
                logingIn: false,
                error: undefined
            }

        case IAuthActionType.LOGIN_SUCCESS:
            //console.log("payload payload tt:", type, action)
            return{
                loading: false,
                user: payload,
                logingIn: true
            }

        case IAuthActionType.LOGIN_FAILURE:
            return{
                loading: false,
                error: payload,
                logingIn: false
            }

        case IAuthActionType.LOGOUT:
            return{
                logingIn: false
            }

        default: 
            return state

    }
}

