import React, { useEffect } from "react";
import User from "../models/User";
import Loading from "./Loading";
import UserDetail from "./UserDetail/UserDetail";

interface UserListProps {
    getAllUsers: any
    loading: boolean
    users: User[]
    user: User
    deleteUser: any
    updateUser: (id: number, user: User) => any
}

function UserList({
    getAllUsers,
    loading,
    users,
    user,
    deleteUser,
    updateUser
}: UserListProps) {
    
    useEffect(() => {
        getAllUsers()
    }, [getAllUsers, user])

    return (
        <div>
            <h1>Users</h1>
            {loading ? <Loading /> :
                users.map(m => {
                    return <UserDetail user={m} key={m.userId} deleteFunc={deleteUser} updateFunc={updateUser}/>
                })
            }
        </div>
    )
}

export default UserList