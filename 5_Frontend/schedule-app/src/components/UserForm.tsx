import { useState } from "react"
import User from "../models/User"

interface UserFormProps {
    addUser: any
}

const DEFAULT_USER = {
    userId: 0,
    firstName: '',
    lastName: '',
    email: ''
}

function UserForm({
    addUser
}: UserFormProps) {
    const [newUser, setNewUser] = useState<User>(DEFAULT_USER)

    return (
        <form onSubmit={(e) => {
            {newUser.firstName!=='' && newUser.lastName!=='' && newUser.email!=='' &&
                // e.preventDefault()
                addUser(newUser)
                setNewUser(DEFAULT_USER)
            }
            {newUser.firstName==='' && newUser.lastName==='' && newUser.email==='' &&
                alert('Try again.')
            }

        }}>
            <div>
                *First Name: <input type="text" value={newUser?.firstName} onChange={(e) => {
                    setNewUser(pre => ({
                        ...pre, firstName: e.target.value
                    }))
                }} />
            </div>
            <div>
                *Last Name: <input type="text" value={newUser?.lastName} onChange={(e) => {
                    setNewUser(pre => ({
                        ...pre, lastName: e.target.value
                    }))
                }} />
            </div>
            <div>
                *Email: <input type="text" value={newUser?.email} onChange={(e) => {
                    setNewUser(pre => ({
                        ...pre,
                        email: e.target.value
                    }))
                }} />
            </div>
            <div>
                Phone Number: <input type="text" value={newUser?.phoneNumber} onChange={(e) => {
                    setNewUser(pre => ({
                        ...pre,
                        phoneNumber: e.target.value
                    }))
                }} />
            </div>

            <div>
                Birthday: <input type="date" onChange={(e) => {
                    setNewUser(pre => ({
                        ...pre,
                        dob: new Date(e.target.value)
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