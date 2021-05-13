import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addEvent } from '../../Action/EventAction';
import { IEvent } from '../../model/IEventType';
import { RootState } from '../../Reducer'


function AddEventForm(){

    const [_dateTime, setDateTime] = useState<string>('')
    const [_eventName, setEventName] = useState<string>('')
    const [_memo, setMemo] = useState<string>('')
    
    const dispatch = useDispatch()
    const event = useSelector((state: RootState) => state.EventReducer)

    const onSubmitForm = () => {

        console.log('Subbit event form')

        let newEvent:IEvent = {
            dateTime: _dateTime,
            eventName: _eventName,
            memo: _memo,
            userId: 'e961b9f4-9292-438e-b902-d7cfacd852cc'
        }

        dispatch(addEvent(newEvent))

    }

    console.log("==> ",event)

    React.useEffect(() => {
        // console.log("date time :",_dateTime)
        // console.log("event name :",_eventName)
        // console.log("memo :",_memo)
        
    },[])


    return (
        <div>
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