import React from "react"
import { Button, Col, Form } from "react-bootstrap"
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
                // console.log(deleteUsers)
            }}>
                <Col md={{ span: 3}}>
                    <Button size="sm" variant="danger" type="submit" onClick={() => deleteUsers}>
                        Delete
                </Button>
                </Col>
            </Form>

        </div>

    )
}

export default UserForm

