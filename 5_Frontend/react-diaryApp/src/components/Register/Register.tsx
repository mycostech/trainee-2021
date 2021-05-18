import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { register } from "../../Action/UserAction";
import { IRegisterForm } from "../../model/IRegisterForm";
import { RootState } from "../../Reducer";

import './Register.scss'

function Register(){

    const history = useHistory()
    const dispatch = useDispatch()

    const auth = useSelector((state: RootState) => state.AuthReducer)
    const user = useSelector((state: RootState) => state.UserReducer)

    const [fname, setFname] = useState<string>('')
    const [lname, setLname] = useState<string>('')
    const [nickname, setNickname] = useState<string>('')
    const [birthdate, setBirthdate] = useState<any>() 
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [cfassword, setCfpassword] = useState<string>('') 


    const onSubmitForm = () => {

        if(!auth.logingIn && (password === cfassword)){

            const registerForm: IRegisterForm = {
                fname: fname,
                lname: lname,
                nickname: nickname,
                password: password,
                email: email,
                birthdate: birthdate
            }

            console.log('--> ',registerForm)

            dispatch(register( registerForm ))
        }
        else{
            window.alert('Password do not match!')
        }
    }

    useEffect(() => {
        
        if(user.addsuccess){
            history.push('/login')
        }

        return () => {
            
        }
        
    }, [user])

    return(
        <div>
            <div className="container">

                <h2>User Info</h2>
                <hr/>
                
                <div>Firstname</div>
                <div>
                    <input type="text" placeholder="Firstname" onChange={(e) => {
                    setFname(e.target.value)
                    }}/>
                </div>
                <div>Lastname</div>
                <div>
                    <input type="text" placeholder="lastname" onChange={(e) => {
                    setLname(e.target.value)
                    }}/>
                </div>
                <div>Nickname</div>
                <div>
                    <input type="text" placeholder="nickname" onChange={(e) => {
                    setNickname(e.target.value)
                    }}/>
                </div>
                <div>Birthdate</div>  
                <div>
                    <input type="date" onChange={(e) => {
                    setBirthdate(e.target.value)
                    }}/>
                </div>

                <hr/>
                <div>Email</div>
                <div>        
                    <input type="email" placeholder="Email" onChange={(e) => {
                    setEmail(e.target.value)
                    }}/>
                </div>
                <div>Password</div>
                <div>
                    <input type="password" placeholder="Password" onChange={(e) => {
                    setPassword(e.target.value)
                    }}/>
                </div>               
                <div>Confirm Password</div>
                <div>
                    <input type="password" placeholder="Confirm Password" onChange={(e) => {
                    setCfpassword(e.target.value)
                    }}/>
                </div>  
           
                <button onClick={onSubmitForm}>Register</button>
            </div>

    
        </div>
    )
}

export default Register