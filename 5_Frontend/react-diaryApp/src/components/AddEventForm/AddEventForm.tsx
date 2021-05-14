import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { addEvent } from '../../Action/EventAction';
import { IEvent } from '../../model/IEventType';
import { RootState } from '../../Reducer'


function AddEventForm(){

    const [_dateTime, setDateTime] = useState<string>('')
    const [_eventName, setEventName] = useState<string>('')
    const [_memo, setMemo] = useState<string>('')
    
    const dispatch = useDispatch()

    const event = useSelector((state: RootState) => state.EventReducer)
    const user = useSelector((state: RootState) => state.UserReducer)
    const auth = useSelector((state: RootState) => state.AuthReducer)

    const history = useHistory()

    const onSubmitForm = () => {

        if(user.success && auth.logingIn){
            console.log('Subbit event form')

            let newEvent:IEvent = {
                dateTime: _dateTime,
                eventName: _eventName,
                memo: _memo,
                userId: user.userInfo?.id
            }

            dispatch(addEvent(newEvent))
        }

    }

    console.log("==> ",event)

    React.useEffect(() => {
        
        if(event.addSuccess){
            history.push('/events')
        }

    },[event])


    return (
        <div>
            <Link to="/events">
                <a>Back</a>
            </Link>
            <div>
                {event.loading &&
                    <p>Loading ...</p>
                }
            </div>
            <div>
                <label>date time</label>
                <input type="datetime-local"
                    onChange={
                        e => {setDateTime(e.target.value)}
                    }
                />
            </div>
            <div>
                <label>Event name</label>
                <input type="text" placeholder="Event Name"
                    onChange= {
                        e => setEventName(e.target.value)
                    }
                />
            </div>
            <div>
                <label>Memo</label>
                <textarea onChange={
                    e => setMemo(e.target.value)
                }></textarea>
            </div>
            <div>
                <button onClick={onSubmitForm}>Submit</button>
            </div>    
        </div>
    )
}

export default AddEventForm;