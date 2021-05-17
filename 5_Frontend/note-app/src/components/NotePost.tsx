import React, { useState } from "react"
import { Form, Button, Row, Container, Col } from "react-bootstrap"
import Note from "../models/Note"
interface NotePostProps {
    insertUser: any
}
const defaultUser = {
    id: 0,
    titleNote: '',
    descriptionNote: '',
    dateNote: ''
}
function NotePost({
    insertUser,
}: NotePostProps) {

    const [newUser, setNewUser] = useState<Note>(defaultUser)

    const today = new Date();
    var date = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
    var result = date.toISOString().split('T')[0];
    const time = today.getHours() + ":" + today.getMinutes()
    var dateTime = result + 'T' + "00:44";

    return (
        <Form onSubmit={(e) => {
            e.preventDefault()
            if (newUser.titleNote != '' && newUser.descriptionNote != '') {
                insertUser(newUser)
                setNewUser(defaultUser)
            }
        }}>
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={newUser?.titleNote} onChange={(e) => {
                            setNewUser(pre => ({
                                ...pre,
                                titleNote: e.target.value
                            }))
                        }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={4} value={newUser?.descriptionNote} onChange={(e) => {
                            setNewUser(pre => ({
                                ...pre,
                                descriptionNote: e.target.value
                            }))
                        }} />
                    </Form.Group>
                </Form>
            </div>

            <div>
                <Row className="justify-content-md-center">
                    <Col md="auto">

                        <Button type="submit" onClick={(e) => {
                            setNewUser(pre => ({
                                ...pre,
                                dateNote: dateTime
                            }))
                        }}>
                            Submit
                        </Button>
                    </Col>

                </Row>
            </div>
            <br />
        </Form>
    )
}

export default NotePost