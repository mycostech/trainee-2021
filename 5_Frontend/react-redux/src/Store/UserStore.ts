import { UserState, UserActionType, UserActionInterface} from './type'

const initialState: UserState = {
    userList: []
}

export function UserReducer(state: UserState = initialState, action: UserActionInterface): UserState {
    switch (action.type){
        case UserActionType.GET_ALL_USER:
            return {
                ...state,
                userList: action.payload
            }

        default:
            return state
    }
}