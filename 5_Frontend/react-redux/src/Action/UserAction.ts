import { Dispatch } from 'react'
import { UserActionType, UserActionInterface } from '../Store/type'
import axios from 'axios'

const getAllUser = () => async(dispatch: Dispatch<UserActionInterface>) =>  {
    let result:any = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log( result)

    dispatch({
        type: UserActionType.GET_ALL_USER,
        payload: result.data
    })
}

export {  
    getAllUser
}