import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { getEventList } from '../../Action/EventAction'
import { RootState } from '../../Reducer'


function EventList(){


    let dispatch = useDispatch()
    const event = useSelector((state: RootState) => state.EventReducer.eventList)|| []
    // const event: any[] = []
    React.useEffect(() => {
        
        dispatch(getEventList('e961b9f4-9292-438e-b902-d7cfacd852cc'))
        
        // console.log(typeof(event))
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
                        <div>Id: {e.id}</div>
                        <div>date time: {e.dateTime}</div>
                        <div>event name: {e.eventName}</div>
                        <div>memo: {e.memo}</div>

                        <li>
                            <Link to={`/detail/${e.id}`}>View</Link>
                        </li>

                        <Link to={`/edit/${e.id}`}>
                            <button>Edit</button>
                        </Link>

                       
                        <button>Del</button>
                
                        
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
