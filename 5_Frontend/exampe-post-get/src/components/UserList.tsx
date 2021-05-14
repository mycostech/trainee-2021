import React, { useEffect } from "react"
import User from "../models/User"
import Loading from "./Loading"
import UserDetail from "./UserDetail/UserDetail"

interface UserListProps {
    getUsers: any
    loading: boolean
    users: User[]
}

function UserList({getUsers,loading,users,}: UserListProps) {

    useEffect(() => {getUsers()}, [getUsers])

    return (
        <div>
            {loading ? <Loading /> :
                users.map(m => {return <UserDetail user={m} key={m.id} />})
            }
        </div>
    )

}

export default UserList