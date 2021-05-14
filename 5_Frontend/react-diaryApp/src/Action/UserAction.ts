import { Dispatch } from 'react'
import { IUserActionType, IUserAction, IUser } from '../model/IUserType';
import axios from 'axios'
import { IAuthActionType } from '../model/IAuthType';
import { ILoginForm } from '../model/ILoginForm';


const API = process.env.REACT_APP_APP_URL

const login = (loginForm: ILoginForm) => async(dispatch: Dispatch<any>) => {

    let api = API + `api/auth/login`
    dispatch({type: IUserActionType.GET_USER_START})
    dispatch({type: IAuthActionType.LOGIN_REQUEST})
    
    try {
        let userLogin = {
            email: loginForm.email,
            password: loginForm.password
        }

        await axios({
            url: api,
            method: 'POST',
            data: userLogin
        }).then(
            res => {
                console.log('set user into localstorage ',res.data.id)
                //localStorage.setItem('user', JSON.stringify(res.data))

                dispatch({type:IUserActionType.GET_USER_SUCCESS, 
                    payload: res.data
                })
                
                dispatch(
                    {type:IAuthActionType.LOGIN_SUCCESS,
                    payload: res.data
                }
                )
            })
        
    }catch (err) {

        dispatch({type: IUserActionType.GET_USER_ERROR,
            error: err
        })
        dispatch({type: IAuthActionType.LOGIN_FAILURE, 
            error: err
        })
    }

}

const logout = () => async(dispatch: Dispatch<any>) => {

    localStorage.removeItem('user')
    dispatch({ type: IAuthActionType.LOGOUT })
}

export {
    login,
    logout
}