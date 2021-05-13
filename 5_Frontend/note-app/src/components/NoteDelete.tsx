import React from "react"
import { Button, Form } from "react-bootstrap"
import useNoteApi from "../hooks/useNoteApi"

interface UserFormProps {
    deleteUsers: any

}
function UserForm({
    deleteUsers,
}: UserFormProps) {

    const [, , , , deleteUser] = useNoteApi()
    return (
        <div>
            <Form onSubmit={(e) => {
                e.preventDefault()
                deleteUser(deleteUsers)
                console.log(deleteUsers)
            }}>
                <Button variant="danger" type="submit" onClick={() => deleteUsers}>
                    Delete
                </Button>
            </Form>

        </div>

    )
}

export default UserForm

