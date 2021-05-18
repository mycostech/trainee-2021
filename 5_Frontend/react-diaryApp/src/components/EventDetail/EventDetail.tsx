import React, { useEffect, useState } from 'react'
import { Link, useParams }  from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Reducer';
import { getEventDetail } from '../../Action/EventAction';

import './EventDetail.scss'
import Moment from 'react-moment';

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
        <div className="container event-detail">
            <div className="link">
                <Link to="/events">
                    <a>Back</a>
                </Link>
            </div>

            <h3>{event.event?.eventName}</h3>
            
            <div className="eventDetail-container">
 
                <div>       
                    <span>
                        <Moment format='LL'>{event.event?.dateTime}</Moment>
                    </span>
      
                </div>

                <div className="memo">
                    {event.event?.memo}
                </div>
            </div>
            
        </div>
    )
}

export default EventDetail