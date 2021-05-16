import React, { useEffect, useState } from 'react'
import Schedule from '../../models/Schedule'
import ScheduleDetail from '../../models/ScheduleDetail'
import DeleteButton from '../Buttons/DeleteButton'
import ScheduleUpdateForm from '../ScheduleUpdateForm'
import ShowScheduleDetail from '../ShowScheduleDetail'
import Button from '../Buttons/PageButton'
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
                    <Button handleClick={() => setEdit(prev => !prev)} buttonText="Edit"/>       
                </div>
            }
            {edit && 
                <div className={scheduleDetail?.category}>
                    <div style={{
                        flex: 1
                    }}>
                        <h2>Edit</h2>
                    </div>
                    <div style={{
                        flex: 1
                    }}>
                        <ScheduleUpdateForm updateSchedule={updateSchedule} sch={schedule} schDetail={scheduleDetail}/>
                    </div>
                    <DeleteButton deleteFunc={deleteFunc} id={schedule.schId}/> 
                    <Button handleClick={() => setEdit(prev => !prev)} buttonText="Edit"/>   
                    
                </div>
            }
        </>
    )
}

export default SchedulesDetail