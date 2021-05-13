import { useState } from "react"
import useNoteApi from "../hooks/useNoteApi"
import Note from "../models/Note"
interface UserFormProps {
    updateUsers: any
}

const defaultUser = {
    id: 0,
    titleNote: '',
    descriptionNote: '',
    dateNote: ''
}

function UserForm({
    updateUsers,
}: UserFormProps) {

    const [newUser, setNewUser] = useState<Note>(defaultUser)

    const [, , , , ,updateUser] = useNoteApi()

    const date = "2021-05-12T10:09:27.77"

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            updateUser(newUser)
            setNewUser(defaultUser)
        }}>
            {/* edit dialog -> new component */}
            <div>
                1: <input type="text" value={newUser?.titleNote} onChange={(e) => {
                    setNewUser(pre => ({
                        ...pre,
                        titleNote: e.target.value
                    }))
                }} />
            </div>
            <div>
                2: <input type="text" value={newUser?.descriptionNote} onChange={(e) => {
                    setNewUser(pre => ({
                        ...pre,
                        descriptionNote: e.target.value
                    }))
                }} />
            </div>
            <div>
                <button type="submit" onClick={(e) => {
                    setNewUser(pre => ({
                        ...pre,
                        dateNote: date,
                        id: updateUsers.id
                    }))
                }}>
                    Add
                </button>
            </div>
        </form>
    )
}

export default UserForm

