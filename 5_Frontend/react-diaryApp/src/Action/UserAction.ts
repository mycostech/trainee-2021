import { Dispatch } from 'react'
import { IUserActionType, IUserAction, IUser } from '../model/IUserType';
import axios from 'axios'
import { IAuthActionType } from '../model/IAuthType';
import { ILoginForm } from '../model/ILoginForm';
import { IRegisterForm } from '../model/IRegisterForm';


const API = process.env.REACT_APP_APP_URL

const register = (registerForm: IRegisterForm) => async(dispatch: Dispatch<any>) => {

    let api = API + `api/auth/register`
    dispatch({ type: IUserActionType.ADD_USER_START })
    
    try{    
        // let userRegister: IRegisterForm = {
        //     fname: registerForm.fname,
        //     lname: registerForm.lname,
        //     nickname: registerForm.nickname,
        //     email: registerForm.email,
        //     password: registerForm.password,
        //     birthdate: registerForm.birthdate
        // }

        let bodyFormDate = new FormData();
        bodyFormDate.append('Fname', registerForm.fname)
        bodyFormDate.append('Lname', registerForm.lname)
        bodyFormDate.append('Nickname', registerForm.nickname)
        bodyFormDate.append('Email', registerForm.email)
        bodyFormDate.append('Password', registerForm.password)
        bodyFormDate.append('Birthdate', registerForm.birthdate)



        await axios({
            url: api,
            method: 'POST',
            data: bodyFormDate,
            headers: { "Content-Type": "multipart/form-data" }
        }).then(
            res => {
                dispatch({type: IUserActionType.ADD_USER_SUCCESS,
                    payload: res.data
                })
                dispatch({type: IUserActionType.ADD_USER_END})
                window.alert('Register success')
            }
        )
    }
    catch(err){
        dispatch({type: IUserActionType.ADD_USER_ERROR,
            payload: err
        })
        window.alert(err)
    }
}

const login = (loginForm: ILoginForm) => async(dispatch: Dispatch<any>) => {

    let api = API + `api/auth/login`
    dispatch({type: IUserActionType.GET_USER_START})
    dispatch({type: IAuthActionType.LOGIN_REQUEST})
    
    try {
        let userLogin: ILoginForm = {
            email: loginForm.email,
            password: loginForm.password
        }

        await axios({
            url: api,
            method: 'POST',
            data: userLogin
        }).then(
            res => {
                
                dispatch({type:IUserActionType.GET_USER_SUCCESS, 
                    payload: res.data
                })
                
                dispatch(
                    {type:IAuthActionType.LOGIN_SUCCESS,
                    payload: res.data
                })
                
            })
        
    }catch (err) {

        dispatch({type: IUserActionType.GET_USER_ERROR,
            error: err
        })
        dispatch({type: IAuthActionType.LOGIN_FAILURE, 
            error: err
        })
        window.alert('email or password incorrect')
    }

}

const logout = () => async(dispatch: Dispatch<any>) => {

    if(window.confirm('logout')){
        dispatch({ type: IAuthActionType.LOGOUT })
        dispatch({ type: IUserActionType.GET_USER_ERROR })
    }
    
}

export {
    login,
    logout,
    register
}