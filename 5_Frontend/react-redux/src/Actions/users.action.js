import {
    getUsers as getUsersApi,
    createNewUser as createNewUserApi,
    updateUser as updateUserApi,
    deleteUser as deleteUserApi 
} from '../Api/users.api'
import ActionType from '../ActionType/ActionType'

export const getUsers = () => async(dispatch) => {
    let result = await getUsersApi()
    console.log('result : ', result)
    dispatch({
        type: ActionType.GET_ALL_USER,
        payload: result
    })
}