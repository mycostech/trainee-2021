import { useEffect, useState } from "react"
import User from "../models/User"

interface UserUpdateFormProps {
    updateUser: (id: number, u: User) => any
    user: User
}

function UserUpdateForm({
    updateUser,
    user
}: UserUpdateFormProps) {
    const [newUser, setNewUser] = useState<User>(user)

    return (
        <form onSubmit={(e) => {
            {newUser.firstName!=='' && newUser.lastName!=='' && newUser.email!=='' &&
                e.preventDefault()
                updateUser(user.userId, newUser)
                alert('Update User Completed.')
                setNewUser(user)
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
                    Update
                </button>
            </div>
        </form>
    )
}

export default UserUpdateForm