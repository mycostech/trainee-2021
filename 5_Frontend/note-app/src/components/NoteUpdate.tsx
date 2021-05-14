import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import useNoteApi from "../hooks/useNoteApi"
import Note from "../models/Note"

interface NoteUpdateProps {
    updateUsers: any
}

const defaultUser = {
    id: 0,
    titleNote: '',
    descriptionNote: '',
    dateNote: ''
}

function NoteUpdate({
    updateUsers,
}: NoteUpdateProps) {

    const [newUser, setNewUser] = useState<Note>(defaultUser)

    const [, , , , , updateUser] = useNoteApi()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const today = new Date();
    var date = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
    var result = date.toISOString().split('T')[0];
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    var dateTime = result + 'T' + time;

    const update = function () {
        newUser.id = updateUsers.id
        newUser.dateNote = dateTime
        if (newUser.titleNote != '' && newUser.descriptionNote != '') {
            updateUser(newUser)
            setNewUser(defaultUser)
            handleClose()
        }
    }

    return (
        <>
            <Button size="sm" variant="primary" onClick={handleShow}>
                Edit
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Title" value={newUser?.titleNote} onChange={(e) => {
                            setNewUser(pre => ({
                                ...pre,
                                titleNote: e.target.value
                            }))
                        }} />
                        <br />
                        <Form.Control type="text" placeholder="Description" value={newUser?.descriptionNote} onChange={(e) => {
                            setNewUser(pre => ({
                                ...pre,
                                descriptionNote: e.target.value
                            }))
                        }} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={update}>
                        Update
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NoteUpdate

