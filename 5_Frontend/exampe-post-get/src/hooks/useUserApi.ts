import { useCallback, useState } from "react"
import userApi from "../api/userAPI"
import User from "../models/User"

const useUserApi = () => {
 
    const [users, setUsers] = useState<User[]>([]) //users เก็บ User ที่เป็น arr
    const [loading, setLoading] = useState<boolean>(false)

    const getAllUsers = useCallback(
        async () => {
            setLoading(true)
            const result = await userApi.getUsers()
            setUsers(result.data)
            setLoading(false) 
        },
        [setLoading, setUsers],
    )

    const insertUser = useCallback(
        async (newUser: User) => {
            setLoading(true)
            const updatedUser = await userApi.postUser(newUser)
            console.log("updatedUser : ", updatedUser)
            setUsers(users => [...users, updatedUser.data])

            // setUsers([...users, newUser])
            setLoading(false)
        },
        [setUsers, setLoading],
    )

    return [
        users,
        loading,
        getAllUsers,
        insertUser
    ] as const
}


export default useUserApi