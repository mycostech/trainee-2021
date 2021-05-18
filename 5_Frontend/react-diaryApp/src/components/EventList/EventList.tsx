import React, { useRef, useState } from 'react'
import Moment from 'react-moment'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';

import { deleteEvent, getEventList } from '../../Action/EventAction'
import { RootState } from '../../Reducer'

import './EventList.scss';

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
        <div className="content">
            {
            event.map(e => {
                return(
                <>
                    <div className="container events">

                        <div className="event-detail">
                            <div className="detail">
                                <div>
                                    <Moment format='LL'>{e.dateTime}</Moment>
                                </div>
                                
                                <div>
                                    <Moment format='LT'>{e.dateTime}</Moment>
                                </div>
                            </div>
                            <div className="detail">
                                <div>
                                    {e.eventName}
                                </div>
                                <div>
                                    {e.memo}
                                </div>
                            </div>
                        </div>

                        <div className="action">
                            <div>
                                <Link to={`/detail/${e.id}`}>
                                    <a>View</a>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/edit/${e.id}`}>
                                    <a>Edit</a>
                                </Link>
                            </div>
                            <div>
                                <a onClick={() => onDelete(e.id)}>Del</a>
                            </div>
                        </div>
            
                    </div>
                </>
                )
            })
            }
        </div>
    )
}

export default EventList

