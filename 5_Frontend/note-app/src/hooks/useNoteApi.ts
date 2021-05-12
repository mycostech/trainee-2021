import { useCallback, useState } from "react"
import noteApi from "../api/noteAPI"
import Note from "../models/Note"

const useNoteApi = () => {
 
    const [users, setUsers] = useState<Note[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getAllUsers = useCallback(
        async () => {
            setLoading(true)
            const result = await noteApi.getUsers()
            setUsers(result.data)
            setLoading(false)
        },
        [setLoading, setUsers],
    )

    const insertUser = useCallback(
        async (newNote: Note) => {
            setLoading(true)
            const updatedUser = await noteApi.postUser(newNote)
            console.log(updatedUser.data)
            setUsers(users => [...users, updatedUser.data])
            setLoading(false)
        },
        [setUsers, setLoading],
    )

    const deleteUser = useCallback(
        async (deleteNote: number) => {
            setLoading(true)
            await noteApi.deleteUser(deleteNote)
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


export default useNoteApi