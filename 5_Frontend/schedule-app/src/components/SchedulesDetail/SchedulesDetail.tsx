import React, { useEffect, useState } from 'react'
import Schedule from '../../models/Schedule'
import ScheduleDetail from '../../models/ScheduleDetail'
import DeleteButton from '../DeleteButton'
import ScheduleUpdateForm from '../ScheduleUpdateForm'
import ShowScheduleDetail from '../ShowScheduleDetail'
import './schedule-detail.css'

interface SchedulesDetailProps {
    schedule: Schedule
    scheduleDetail ? : ScheduleDetail
    deleteFunc: any
    updateSchedule: any
}

function SchedulesDetail({
    schedule,
    scheduleDetail,
    deleteFunc,
    updateSchedule
}: SchedulesDetailProps) {
    const [edit,setEdit] = useState<boolean>(false)
    const [toggleShow, setToggleShow] = useState(false)

    return (
        <>
            {!edit &&
                <div className={scheduleDetail?.category}
                onClick={() => setToggleShow(pre => !pre)}
            >
                    <div style={{
                        flex: 1
                    }}>
                        ID: {schedule.schId}
                        <br />
                        {schedule.userId !== null &&
                            <div>
                                User: {schedule.userId}
                            </div>
                        }
                    </div>
                    <div style={{
                        flex: 1
                    }}>
                        Title: {schedule.title}
                    </div>
                    
                    {(toggleShow) && 
                        <ShowScheduleDetail scheduleDetail={scheduleDetail}/>
                    }
                    <DeleteButton deleteFunc={deleteFunc} id={schedule.schId}/>
                    <button onClick={() => setEdit(prev => !prev)}>Edit</button>        
                </div>
            }
            {edit && 
                <div className={scheduleDetail?.category}>
                    <div style={{
                        flex: 1
                    }}>
                        <ScheduleUpdateForm updateSchedule={updateSchedule} sch={schedule} schDetail={scheduleDetail}/>
                    </div>
                    <div style={{
                        flex: 1
                    }}>
                        <DeleteButton deleteFunc={deleteFunc} id={schedule.schId}/>   
                        <button onClick={() => setEdit(prev => !prev)}>Edit</button> 
                    </div>
                    
                </div>
            }
        </>
    )
}

export default SchedulesDetail