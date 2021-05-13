import React from 'react'
import { Card } from 'react-bootstrap'
import Note from '../../models/Note'
import NoteDelete from '../NoteDelete'
import NoteUpdate from '../NoteUpdate'
import './user-detail.css'
interface NoteDetailProps {
    note: Note
}

function UserDetail({
    note
}: NoteDetailProps) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{note.titleNote}</Card.Title>
                    <Card.Text>
                        {note.descriptionNote}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">{note.dateNote}</Card.Subtitle>
                    <NoteDelete deleteUsers={note.id} />
                    <NoteUpdate updateUsers={note} />
                </Card.Body>
            </Card>

        </div>

    )
}

export default UserDetail