import { UserState, UserActionType, UserActionInterface} from './type'

const initialState: UserState = {
    userList: [],
    loading: false
}

export function UserReducer(state: UserState = initialState, action: UserActionInterface): UserState {
    switch (action.type){
        case UserActionType.GET_ALL_USER:
            return {
                ...state,
                userList: action.payload
            }
        
        case UserActionType.ADD_NEW_USER: 
            return {
                ...state,
                userList: [ action.payload, ...state.userList ],
                loading: false
            }
        
        case UserActionType.SHOW_LOADING:
            return{
                ...state,
                loading: true
            }

        default:
            return state
    }
}