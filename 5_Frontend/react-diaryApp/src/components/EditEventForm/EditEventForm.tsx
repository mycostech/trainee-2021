import React, { useEffect, useState } from 'react'
import {Link, useHistory, useParams}  from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Reducer'
import { editEvent, getEventDetail } from '../../Action/EventAction';
import { IEvent } from '../../model/IEventType';

function EditEventForm(){

    const history = useHistory();
    const {eventId} = useParams<{eventId?: string}>();
    
    const dispatch = useDispatch()
    const [count, setCount] = useState<number>(0);

    const event = useSelector((state: RootState) => state.EventReducer)
    const user = useSelector((state: RootState) => state.UserReducer)
    const auth = useSelector((state: RootState) => state.AuthReducer)
    
    console.log("eventId, ",Number(eventId))

    const [_dateTime, setDateTime] = useState<any>();
    const [_eventname, setEventName] = useState<string>('');
    const [_memo, setMemo] = useState<string>('');
    

    const onSubmitForm = () => {

        if(user.success && auth.logingIn){

            let newEvent: IEvent = {
                dateTime: _dateTime,
                eventName: _eventname,
                memo: _memo,
                userId: user.userInfo?.id
            }
            console.log("event ID ==> ",eventId)
            console.log(newEvent)

            dispatch(editEvent(Number(eventId), newEvent))
        }
    }

    useEffect(() => {
        
        if(count === 0){
            dispatch(getEventDetail(Number(eventId)))
        }
        if(event.updateSuccess ){
            history.push('/events')
        }
        
        setCount(1)

        return () => {
        }

    }, [dispatch, event])
        
    return (
        <div>
            <Link to="/events">
                <a>Back</a>
            </Link>
            {!event.updateSuccess &&
                <p>Loading ...</p>
            }
            <div>
                <h3>old info</h3>
                <p>date time: {event.event?.dateTime}</p>
                <p>event name: {event.event?.eventName}</p>
                <p>memo: {event.event?.memo}</p>
            </div>
            <h3>New info</h3>
            <div>
                <label>date time</label>
                <input type="datetime-local" onChange={
                    e => {
                        setDateTime(e.target.value)
                    }
                }/>
            </div>
            <div>
                <label>Event Name</label>
                <input type="text" onChange={
                    e => {
                        setEventName(e.target.value)
                    }
                }/>
            </div>
            <div>
                <label>Memo</label>
                <textarea onChange={
                    e => {
                        setMemo(e.target.value)
                    }
                }></textarea>
            </div>
            <div>
                <button onClick={onSubmitForm}>Submit</button>
            </div>
        </div>
    )
}

export default EditEventForm