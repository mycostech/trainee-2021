import { useState } from "react"
import useNoteApi from "../hooks/useNoteApi"
import Note from "../models/Note"
interface UserFormProps {
    deleteUsers: any
}
function UserForm({
    deleteUsers
}: UserFormProps) {

    const [deleteNote, setDeleteNote] = useState<Note>()
    
    const [users, loading, getAllUser,insertUser,deleteUser] = useNoteApi()


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            deleteUser(deleteUsers)
        }}>
            <div>
                {
                    /**
                     * JS: newUser ? newUser.name : ''
                     */
                }
                <div>
                <button onClick={() => deleteUsers}>aaaa</button>
                </div>
            </div>
            <div>
            </div>
        </form>
    )
}

export default UserForm

