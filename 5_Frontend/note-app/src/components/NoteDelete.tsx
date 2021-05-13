import useNoteApi from "../hooks/useNoteApi"

interface UserFormProps {
    deleteUsers: any
    
}
function UserForm({
    deleteUsers,
}: UserFormProps) {

    const [, , , , deleteUser] = useNoteApi()
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
                    <button onClick={() => deleteUsers}>delete</button>
                </div>
            </div>
            <div>
            </div>
        </form>
    )
}

export default UserForm

