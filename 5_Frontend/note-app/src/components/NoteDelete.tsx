import { useState } from "react"
import Note from "../models/Note"
interface UserFormProps {
    deleteUser: any
}
const defaultUser = {
    id: 0,
}
function UserForm({
    deleteUser
}: UserFormProps) {

    const [deleteNote, setDeleteNote] = useState<Note>(defaultUser)

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            deleteUser(deleteNote)
            setDeleteNote(defaultUser)
        }}>
            <div>
                {
                    /**
                     * JS: newUser ? newUser.name : ''
                     */
                }
                <div>
                    1: <input type="text" value={deleteNote?.id} onChange={(e) => {
                        setDeleteNote(pre => ({...pre, id: Number(e.target.value)}))
                    }} />
                </div>
            </div>
            <div>
                <button type="submit">
                    Add
                </button>
            </div>
        </form>
    )
}

export default UserForm

