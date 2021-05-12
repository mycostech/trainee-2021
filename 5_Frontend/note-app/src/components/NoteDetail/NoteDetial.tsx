import React, { useState } from 'react'
import Note from '../../models/Note'
import './user-detail.css'
interface NoteDetailProps {
    note: Note
}

function UserDetail({
    note
}: NoteDetailProps) {
    return (
        <div className="user-detail">
            <div style={{
                flex: 1
            }}>
                titleNote: {note.titleNote}
            </div>
            <div style={{
                flex: 1
            }}>
                descriptionNote: {note.descriptionNote}
            </div>
            <div style={{
                flex: 1
            }}>
                dateNote: {note.dateNote}
            </div>

        </div>

    )
}

export default UserDetail