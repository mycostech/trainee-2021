import { useState } from "react"
import todo from "../models/todolist"
interface UserFormProps {
    insertUser: any
}

const DEFAULT_USER = {
    datetime: '',
    taskname: ''
}
function UserForm({
    insertUser
}: UserFormProps) {
    const [newUser, setNewUser] = useState<todo
    >(DEFAULT_USER)

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            insertUser(newUser)
            setNewUser(DEFAULT_USER)
        }}>
            <div>
                {
                    /**
                     * JS: newUser ? newUser.name : ''
                     */
                }
                name: <input type="text" value={newUser?.date} onChange={(e) => {
                    /**
                     * 
                     * 
                     * setNewUser(pre => {
                        return {...pre, name: e.target.value}
                        
                        })
                     */
                    setNewUser(pre => ({
                        ...pre, name: e.target.value
                    }))
                }} />
            </div>
            <div>
                email: <input type="text" value={newUser?.taskname} onChange={(e) => {
                    setNewUser(pre => ({
                        ...pre,
                        email: e.target.value
                    }))
                }} />
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
