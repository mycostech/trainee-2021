import React from 'react'
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap'
import Note from '../../models/Note'
import NoteDelete from '../NoteDelete'
import NoteUpdate from '../NoteUpdate'
interface NoteDetailProps {
    note: Note
}

function UserDetail({
    note
}: NoteDetailProps) {
    return (
        <div>
            <Container>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>{note.titleNote}  </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{note.dateNote}</Card.Subtitle>
                            <Card.Text>
                                {note.descriptionNote}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <NoteDelete deleteUsers={note} />
                                <NoteUpdate updateUsers={note} />
                            </Row>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <br />
            </Container>


        </div>

    )
}

export default UserDetail