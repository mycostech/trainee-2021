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
    const [_eventname, setEventName] = useState<string | undefined>('');
    const [_memo, setMemo] = useState<string | undefined>('');
    

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

            setDateTime(event.event?.dateTime)
            setEventName(event.event?.eventName)
            setMemo(event.event?.memo)

            dispatch(getEventDetail(Number(eventId)))
        }
        if(event.updateSuccess ){
            history.push('/events')
        }
        
        setCount(1)

        return () => {
        }

    }, [setDateTime, setEventName, setMemo, setCount, dispatch, event])
        
    return (
        <div>
            <Link to="/events">
                <a>Back</a>
            </Link>
            {event.loading &&
                <p>Loading ...</p>
            }

            <h3>New info</h3>
            <div>
                <label>date time</label>
                <input type="datetime-local" value={_dateTime} onChange={
                    e => {
                        setDateTime(e.target.value)
                    }
                }/>
            </div>
            <div>
                <label>Event Name</label>
                <input type="text" value={_eventname} onChange={
                    e => {
                        setEventName(e.target.value)
                    }
                }/>
            </div>
            <div>
                <label>Memo</label>
                <textarea value={_memo} onChange={
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