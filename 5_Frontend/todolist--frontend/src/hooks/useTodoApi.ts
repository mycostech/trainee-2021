import { useCallback, useState } from "react"
import todoApi from "../api/todoAPI"
import todo from "../models/todolist"

const useTodoApi = () => {
 
    const [users, setUsers] = useState<todo[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getAllUsers = useCallback(
        async () => {
            setLoading(true)
            const result = await todoApi.getUsers()
            setUsers(result.data)
            setLoading(false)
        },
        [setLoading, setUsers],
    )

    const insertUser = useCallback(
        async (newtodo: todo) => {
            setLoading(true)
            const updatedUser = await todoApi.postUser(newtodo)
            console.log(updatedUser.data)
            setUsers(users => [...users, updatedUser.data])
            // setUsers([...users, newUser])
            setLoading(false)
        },
        [setUsers, setLoading],
    )

    const deleteUser = useCallback(
        async (deletetodo: number) => {
            setLoading(true)
            await todoApi.deleteUser(deletetodo)
            setLoading(false)
        },
        [setUsers, setLoading],
    )

    return [
        users,
        loading,
        getAllUsers,
        insertUser,
        deleteUser
    ] as const
}


export default useTodoApi