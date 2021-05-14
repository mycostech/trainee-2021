import { useEffect, useState } from "react"
import User from "../models/User"

interface LoginFormProps {
    setStay: any
    setId: any
    setLogin: any
    getAllUsers: any
    users: User[]
}

function LoginForm ({
    setStay,
    setId,
    setLogin,
    getAllUsers,
    users
}: LoginFormProps) {
    const [userId,setUserId] = useState<number>()

    useEffect(() => {
        getAllUsers()
    }, [getAllUsers])

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={
                () => {

                    {users.find(e => e.userId==userId) === undefined &&
                        alert("Not Found User ID")
                    }

                    {users.find(e => e.userId==userId) !== undefined &&
                        setStay(true)
                        setId(userId) 
                        setLogin(userId + ', Logout')   
                    }

                }
            }>
                <input type="text" value={userId} onChange={(e) => setUserId(Number(e.target.value))}/>
                <button type="submit"> ENTER </button>
            </form>
        </>
    )
}

export default LoginForm