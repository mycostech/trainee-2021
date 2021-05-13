import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
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

    const [, , , , , updateUser] = useNoteApi()

    const date = "2021-05-12T10:09:27.77"

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const update = function () {
        newUser.id = updateUsers.id
        newUser.dateNote = date
        updateUser(newUser)
        setNewUser(defaultUser)
        handleClose()
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    1: <input type="text" value={newUser?.titleNote} onChange={(e) => {
                        setNewUser(pre => ({
                            ...pre,
                            titleNote: e.target.value
                        }))
                    }} />
                </Modal.Body>
                <Modal.Body>
                    2: <input type="text" value={newUser?.descriptionNote} onChange={(e) => {
                        setNewUser(pre => ({
                            ...pre,
                            descriptionNote: e.target.value
                        }))
                    }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" type="submit" onClick={update}>
                        Edit
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UserForm

