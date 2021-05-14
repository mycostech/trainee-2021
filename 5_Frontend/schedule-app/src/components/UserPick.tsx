import React, { useEffect } from "react";
import User from "../models/User";
import Loading from "./Loading";
import UserDetail from "./UserDetail/UserDetail";

interface UserPickProps {
    getUser: any
    loading: boolean
    user: User
    id: number
    deleteUser: any
    updateUser: (id: number, user: User) => any
}

function UserPick({
    getUser,
    loading,
    user,
    id,
    deleteUser,
    updateUser
}: UserPickProps) {
    
    useEffect(() => {
        getUser(id)
    }, [id])

    return (
        <div>
            <h1>{user.firstName}'s Profile</h1>
            {loading ? <Loading /> :
                    <UserDetail user={user} key={user.userId} deleteFunc={deleteUser} updateFunc={updateUser}/>
            }
        </div>
    )
}

export default UserPick