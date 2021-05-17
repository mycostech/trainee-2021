import React, { useEffect, useState } from "react"
import scheduleApi from "../api/schduleAPI"
import Schedule from "../models/Schedule"
import ScheduleDetail from "../models/ScheduleDetail"
import SchedulesDetail from "./SchedulesDetail/SchedulesDetail"

interface ScheduleUpdateFormProps {
    updateSchedule : any
    sch: Schedule
    schDetail ? : ScheduleDetail
}

function ScheduleUpdateForm({
    updateSchedule,
    sch,
    schDetail = {schId: sch.schId, schDate: new Date(),category: 'N'}
}: ScheduleUpdateFormProps) {
    const DEFAULT_SCHEDULE = {
        schId: sch.schId,
        title: sch.title,
        scheduleDetail: schDetail
    }
    const [newSchedule, setNewSchedule] = useState<Schedule>(DEFAULT_SCHEDULE)
    useEffect(() => {
        console.log(newSchedule)
    }, [setNewSchedule])
    return (
        <form onSubmit={(e) => {
            {newSchedule.title!=='' && 
                e.preventDefault()
                updateSchedule(sch.schId, newSchedule) 
                alert('Update Schedule Completed.')
                setNewSchedule(DEFAULT_SCHEDULE)
            }               

            {newSchedule.title==='' &&
                alert('Try Again.')
            }
        }}>
            <div>
                *Title: <input type="text" value={newSchedule.title} onChange={(e) => {
                    setNewSchedule(pre => ({
                        ...pre, title: e.target.value
                    }))
                }} />
            </div>

            <div>
                *Date: <input type="date" onChange={(e) => {
                    setNewSchedule(pre => ({
                        ...pre, scheduleDetail: {
                            ...pre.scheduleDetail,
                            schDate: new Date(e.target.value)
                        }
                    }))
                }} />
                
            </div>
            
            <div>
                *Category: 
                    <select value={newSchedule.scheduleDetail.category} onChange={(e) => {
                        setNewSchedule(pre => ({
                            ...pre, scheduleDetail: {...pre.scheduleDetail, 
                            category: e.target.value}
                        }))
                    }}>
                        <option value="N">Normal</option>
                        <option value="B">Birthday</option>
                        <option value="H">Holiday</option>
                        <option value="I">Important</option>
                        <option value="A" >Annivesary</option>
                    </select>
            </div>

            <div>
                Note: <input type="text" value={newSchedule?.scheduleDetail?.note} onChange={(e) => {
                    setNewSchedule(pre => ({
                        ...pre, scheduleDetail: {...pre.scheduleDetail,  note: e.target.value
                    }}))
                }} />
            </div>

            <div>
                <button type="submit" >
                    Update
                </button>
            </div>
        </form>
    )
}

export default ScheduleUpdateForm