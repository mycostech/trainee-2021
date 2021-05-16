import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';

import { deleteEvent, getEventList } from '../../Action/EventAction'
import { RootState } from '../../Reducer'


function EventList(){


    let dispatch = useDispatch()

    
    const event = useSelector((state: RootState) => state.EventReducer.eventList) || []
    const user = useSelector((state: RootState) => state.UserReducer)
    const auth = useSelector((state: RootState) => state.AuthReducer)

    const onDelete = (id?: number) => {
        if(id){
            dispatch(deleteEvent(id))
        }
    }

    React.useEffect(() => {
        
        if(user.getsuccess&& auth.logingIn){
            console.log('uid : ',user.userInfo?.id)
            dispatch(getEventList(user.userInfo?.id))
        }
        

        return(
            console.log('terminate')
        )
        
    }, [dispatch])

    return(
        <div>
            {
            event.map(e => {

                return(
                <>
                    <div>
                        <div>date time: {e.dateTime}</div>
                        <div>event name: {e.eventName}</div>
                        <div>memo: {e.memo}</div>

                        <li>
                            <Link to={`/detail/${e.id}`}>View</Link>
                        </li>

                        <Link to={`/edit/${e.id}`}>
                            <button>Edit</button>
                        </Link>

                       
                        <button onClick={() => onDelete(e.id)}>Del</button>
                
                        <hr></hr>
                    </div>
                </>
                )
            })
            }
        </div>
    )
}

export default EventList
