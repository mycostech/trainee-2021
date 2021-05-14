import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../Action/UserAction";
import { ILoginForm } from "../../model/ILoginForm";
import { RootState } from '../../Reducer';

import { useHistory } from 'react-router-dom';

function Login(){

    const dispatch = useDispatch()
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const history = useHistory()

    const auth = useSelector((state: RootState) => state.AuthReducer)
    const user = useSelector((state: RootState) => state.UserReducer)

    const loginForm: ILoginForm = {
        email: email,
        password: password
    }

    const onSubmitLogin = () => {
        dispatch(login(loginForm)) 
    }

    useEffect(() => {
        
        if(auth.logingIn && user.success){
            console.log('auth login ==> ',auth.user)
            history.push('/events')
        }

        return () => {
            
        }
        
    }, [auth])

    return(
        <div>
            <div>
                <label>Email: </label>
                <input type="text" placeholder="email@example.com" onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" placeholder="passwod" onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
            </div>
            <div>
                <button onClick={onSubmitLogin}>Submit</button>
            </div>
        </div>
    )
}

export default Login