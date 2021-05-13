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
            await noteApi.postUser(newNote)
            // (edit) , identity(1,1) must get new value id 
            const result = await noteApi.getUsers()
            setUsers(result.data)
            setLoading(false)
        },
        [setUsers, setLoading],
    )

    const deleteUser = useCallback(
        async (deleteNote: number) => {
            setLoading(true)
            await noteApi.deleteUser(deleteNote)
            // (edit) , update column 
            setLoading(false)
        },
        [setUsers, setLoading],
    )

    const updateUser = useCallback(
        async (updateNote: Note) => {
            setLoading(true)
            // (edit) , Change the value , get value to input update 
            const result = await noteApi.updateUser(updateNote)
            // setUsers(users => [...users, result.data])
            setLoading(false)
        },
        [setUsers, setLoading],
    )

    return [
        users,
        loading,
        getAllUsers,
        insertUser,
        deleteUser,
        updateUser
    ] as const
}


export default useNoteApi