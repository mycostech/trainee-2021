import ActionType from '../ActionType/ActionType'

const initialState = {
    userList: [],
    loading: false,
}

function UserReducer(state = initialState, action) {
    let { type, payload } = action

    switch (type) {
        case ActionType.GET_ALL_USER:
            return {
                ...state,
                userList: payload
            }
            // break;
    
        default:
            return { ...state }
            // break;
    }
}

export default UserReducer