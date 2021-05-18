import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../Action/UserAction";
import { ILoginForm } from "../../model/ILoginForm";
import { RootState } from '../../Reducer';

import { useHistory } from 'react-router-dom';

import './Login.scss'

function Login(){

    const dispatch = useDispatch()
    const history = useHistory()

    const auth = useSelector((state: RootState) => state.AuthReducer)
    const user = useSelector((state: RootState) => state.UserReducer)

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmitLogin = () => {
        
        const loginForm: ILoginForm = {
            email: email,
            password: password
        }

        dispatch(login(loginForm)) 
    }

    useEffect(() => {
        
        if(auth.logingIn && user.getsuccess){
            console.log('auth login ==> ',auth.user)
            history.push('/events')
        }

        return () => {
            
        }
        
    }, [auth])

    return(
        <div className="container">
         
            <div>Email</div>
            <div>
                <input type="text" placeholder="email@example.com" onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
            </div>
            <div>password</div>
            <div>
                <input type="password" placeholder="passwod" onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
            </div>

            <button onClick={onSubmitLogin}>Login</button>
     
        </div>
    )
}

export default Login