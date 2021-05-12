import { Dispatch } from 'react'
import { UserActionType, UserActionInterface, User } from '../Store/type'
import axios from 'axios'

const getAllUser = () => async(dispatch: Dispatch<UserActionInterface>) =>  {
    let result:any = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log( result)

    dispatch({
        type: UserActionType.GET_ALL_USER,
        payload: result.data
    })
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
    addNewUser
}