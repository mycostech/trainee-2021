import { useState } from "react"
import User from "../models/User"
interface UserFormProps {
    insertUser: any
}

const DEFAULT_USER = {
    name: '',
    email: ''
}
function UserForm({
    insertUser
}: UserFormProps) {
    const [newUser, setNewUser] = useState<User>(DEFAULT_USER)

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
                name: <input type="text" value={newUser?.name} onChange={(e) => {
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
                email: <input type="text" value={newUser?.email} onChange={(e) => {
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