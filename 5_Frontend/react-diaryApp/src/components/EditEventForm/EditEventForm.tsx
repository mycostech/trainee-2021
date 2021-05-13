import React from 'react'
import {useParams}  from 'react-router-dom'

function EditEventForm(){

    let eventId = useParams();

    console.log("eventId, ",eventId)
        
    return (
        <div>
            Edit Form
        </div>
    )
}

export default EditEventForm