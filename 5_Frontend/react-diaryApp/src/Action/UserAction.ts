import { Dispatch } from 'react'
import { UserActionType, UserActionInterface, User } from '../Reducer/type'
import axios from 'axios'

const API = process.env.REACT_APP_APP_URL

const showLoading = () => async (dispatch: Dispatch<UserActionInterface>) => {
    dispatch({
        type: UserActionType.SHOW_LOADING
    })
}

const getAllUser = () => async(dispatch: Dispatch<UserActionInterface>) =>  {
    try {
        let result:any = await axios.get<any>(
            API + 'api/event/e961b9f4-9292-438e-b902-d7cfacd852cc'
        )
        console.log('link ',API)
        console.log( result)
    
        dispatch({
            type: UserActionType.GET_ALL_USER,
            payload: result.data
        })
    } catch (error) {
        console.log(API)
        console.log(error)
    }
    
}

const addNewUser = (newUser: User) => async(dispatch: any) => {
    axios({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        data: newUser
    }).then(res => {
        console.log(res.data)

        dispatch({
            type: UserActionType.ADD_NEW_USER,
            payload: res.data
        })
    })
}

export {  
    getAllUser,
    addNewUser,
    showLoading
}