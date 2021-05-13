import React, { useEffect } from "react";
import User from "../models/User";
import Loading from "./Loading";
import UserDetail from "./UserDetail/UserDetail";

interface UserListProps {
    getAllUsers: any
    loading: boolean
    users: User[]
    deleteUser: any
    updateUser: (id: number, user: User) => any
}

function UserList({
    getAllUsers,
    loading,
    users,
    deleteUser,
    updateUser
}: UserListProps) {
    
    useEffect(() => {
        getAllUsers()
    }, [getAllUsers])

    return (
        <div>
            {loading ? <Loading /> :
                users.map(m => {
                    return <UserDetail user={m} key={m.userId} deleteFunc={deleteUser} updateFunc={updateUser}/>
                })
            }
        </div>
    )
}

export default UserList