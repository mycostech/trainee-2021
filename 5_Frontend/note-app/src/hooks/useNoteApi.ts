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
        async (postNote: Note) => {
            setLoading(true)
            await noteApi.postUser(postNote)
            // (edit) , identity(0,0)
            const result = await noteApi.getUsers()
            setUsers(result.data)
            setLoading(false)
        },
        [setUsers, setLoading],
    )

    const deleteUser = useCallback(
        async (deleteNote: any) => {
            setLoading(true)
            console.log(deleteNote)
            const remove = await noteApi.deleteUser(deleteNote.id)
            // (edit) delete column
            const result = await noteApi.getUsers()
            const a = result.data
            const newList = a.filter((line) => line.id !== deleteNote.id)
            console.log(newList)
            setUsers(newList)
            setLoading(false)
        },
        [setUsers, setLoading],
    )

    const updateUser = useCallback(
        async (updateNote: Note) => {
            setLoading(true)
            // (edit) , Change the value , get value to input update 
            const result = await noteApi.updateUser(updateNote)
            setUsers(users => [...users, result.data])
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
        updateUser,
    ] as const
}


export default useNoteApi