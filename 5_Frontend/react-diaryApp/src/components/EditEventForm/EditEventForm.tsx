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

    const event = useSelector((state: RootState) => state.EventReducer)
    const user = useSelector((state: RootState) => state.UserReducer)
    const auth = useSelector((state: RootState) => state.AuthReducer)
    
    console.log("eventId, ",Number(eventId))

    const [count, setCount] = useState<number>(0);
    const [_dateTime, setDateTime] = useState<any>();
    const [_eventname, setEventName] = useState<string | undefined>('');
    const [_memo, setMemo] = useState<string | undefined>('');
    

    const onSubmitForm = () => {

        if(user.getsuccess && auth.logingIn){

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

            console.log("event name ==> ",_eventname)
            setDateTime(event.event?.dateTime)
            setEventName(event.event?.eventName)
            setMemo(event.event?.memo)
            
        }

        if(event.updateSuccess ){
            history.push('/events')
        }
        
        setCount(1)

        return () => {
            
            console.log("edit terminate")
        }

    }, [setDateTime, setEventName, setMemo, setCount, dispatch, event])
        
    return (
        <div>{count == 1 &&
            <>

                <div className="container">

                    <div className="link">
                        <Link to="/events">
                            <a>Back</a>
                        </Link>
                    </div>

                    <h2>Edit Event</h2>
                    
                    <hr/>

                    <div>
                        {event.loading &&
                            <p>Loading ...</p>
                        }
                    </div>

                    <div>Date Time</div>

                    <input type="datetime-local" value={_dateTime} onChange={
                        e => {setDateTime(e.target.value)}
                    }/>

                    <div>Event name</div>
                    
                    <input type="text" value={_eventname} onChange={
                    e => { setEventName(e.target.value)}
                    }/>

                    <div>Memo</div>

                    <textarea value={_memo} onChange={
                    e => {setMemo(e.target.value)}
                    }></textarea>

                    <div>
                        <button onClick={onSubmitForm}>Submit</button>
                    </div>

                </div>
                
            </>
        }
            
        </div>
    )
}

export default EditEventForm
