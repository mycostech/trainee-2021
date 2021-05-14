import { useCallback, useState } from "react"
import userApi from "../api/userAPI"
import User from "../models/User"

const useUserApi = () => {
    const DEFAULT_USER = {
        userId: 0,
        firstName: '',
        lastName: '',
        email: ''
    }
    const [users, setUsers] = useState<User[]>([])
    const [user, setUser] = useState<User>(DEFAULT_USER)
    const [loading, setLoading] = useState<boolean>(false)

    const getAllUsers = useCallback(
        async () => {
            setLoading(true)
            const result = await userApi.getAllUser()
            console.log(result)
            setUsers(result.data)
            setLoading(false)
        },
        [setLoading, setUsers]
    )

    const getUser = useCallback(
        async (id: number) => {
            setLoading(true)
            const result = await userApi.getUser(id)
            console.log(result)
            setUser(result.data)
            setLoading(false)
        },
        [setLoading, setUser]
    )

    const addUser = useCallback(
        async (u: User) => {
            setLoading(true)
            const newUser = await userApi.postUser(u)
            console.log("addUser : ", newUser)
            setUser(newUser.data)
            setLoading(false)
        },
        [setLoading, setUser]
    )

    const updateUser = useCallback(
        async (id: number,u: User) => {
            setLoading(true)
            const nUser = await userApi.putUser(id,u)
            console.log("updateUser : ", nUser)
            setUser(nUser.data)
            setLoading(false)
        },
        [setLoading, setUser]
    )

    const deleteUser = useCallback(
        async (uId: number) => {
            setLoading(true)
            const newUser = await userApi.deleteUser(uId)
            console.log("deleteUser : ", uId)
            setUser(newUser.data)
            setLoading(false)
        },
        [setLoading, setUser]
    )
    
    return [users, user, loading, getAllUsers, getUser, addUser, updateUser, deleteUser] as const
}

export default useUserApi