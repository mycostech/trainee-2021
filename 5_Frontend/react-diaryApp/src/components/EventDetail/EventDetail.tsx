import React, { useEffect, useState } from 'react'
import { Link, useParams }  from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Reducer';
import { getEventDetail } from '../../Action/EventAction';


function EventDetail(){
    
    let {eventId} = useParams<{eventId?: string}>();

    console.log(Number(eventId))

    let dispatch = useDispatch()
    let event = useSelector((state: RootState) => state.EventReducer)

    React.useEffect(() => {

        dispatch(getEventDetail(Number(eventId)))

        return(
            console.log('event detail terminate')
        )

    }, [dispatch])

    console.log(event)
    return(
        <div>
            <Link to="/events">
                <a>Back</a>
            </Link>

            <div>
                <div>event name: {event.event?.eventName}</div>
                <div>date time: {event.event?.dateTime}</div>
                <div>memo: {event.event?.memo}</div>
            </div>
            
        </div>
    )
}

export default EventDetail