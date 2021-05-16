import React, { useEffect, useState } from "react"
import Schedule from "../models/Schedule"

interface ScheduleFormProps {
    addSchedule : any
}

const DEFAULT_SCHEDULE = {
    schId: 0,
    title: '',
    scheduleDetail: {
        schId: 0,
        schDate: new Date(),
        category: 'N' 
    }
}

function ScheduleForm({
    addSchedule
}: ScheduleFormProps) {
    const [newSchedule, setNewSchedule] = useState<Schedule>(DEFAULT_SCHEDULE)

    return (
        <form onSubmit={(e) => {
            {newSchedule.title!=='' && 
                //e.preventDefault()
                    addSchedule(newSchedule) 
                    setNewSchedule(DEFAULT_SCHEDULE)
                    e.preventDefault()
            }               

            {newSchedule.title==='' &&
                alert('Try Again.')
                e.preventDefault()
            }
        }}>
            <h3>Add</h3>
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
                    <select value={newSchedule?.scheduleDetail.category} onChange={(e) => {
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
                    Add
                </button>
            </div>
        </form>
    )
}

export default ScheduleForm