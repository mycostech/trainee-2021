import React, { useEffect } from "react"
import User from "../models/User"
import UserDetail from "./Detail/UserDetail"

interface UserListProps {
    getUsers: any
    users: User[]
}

function UserList({getUsers,users}: UserListProps) {

    useEffect(() => {getUsers()}, [getUsers])

    return (
        <div>
            {users.map(m => {return <UserDetail user={m} key={m.userid} />})}
        </div>
    )

}

export default UserList