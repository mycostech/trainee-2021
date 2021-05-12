import { useState } from "react"
import Note from "../models/Note"
interface UserFormProps {
    insertUser: any
}
const defaultUser = {
    id: 0,
    titleNote: '',
    descriptionNote: '',
    dateNote: ''
}
function UserForm({
    insertUser,
}: UserFormProps) {

    const [newUser, setNewUser] = useState<Note>(defaultUser)

    // date no auto
    const date = "2021-05-12T10:09:27.77"

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            insertUser(newUser)
            setNewUser(defaultUser)
        }}>
            <div>
                {
                    /**
                     * JS: newUser ? newUser.name : ''
                     */
                }
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

            </div>

            <div>
                <button type="submit" onClick={(e) => {
                    setNewUser(pre => ({
                        ...pre,
                        dateNote: date
                    }))
                }}>
                    Add
                </button>
            </div>
        </form>
    )
}

export default UserForm