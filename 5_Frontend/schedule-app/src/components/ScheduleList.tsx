import React, { useEffect } from "react";
import Schedule from "../models/Schedule";
import ScheduleDetail from "../models/ScheduleDetail";
import User from "../models/User";
import Loading from "./Loading";
import SchedulesDetail from "./SchedulesDetail/SchedulesDetail";

interface ScheduleListProps {
    getAllSchedules: any
    getAllScheduleDetail: any
    loading: boolean
    schedules: Schedule[]
    scheduleDetail: ScheduleDetail[]
    schedule: Schedule
    deleteSchedule: any 
    updateFunc: any
    user: User
    users: User[]
}

function ScheduleList({
    getAllSchedules,
    getAllScheduleDetail,
    loading,
    schedules,
    scheduleDetail,
    schedule,
    deleteSchedule,
    updateFunc,
    user,
    users
    
}: ScheduleListProps) {

    useEffect(() => {
        getAllSchedules()
        getAllScheduleDetail()
    }, [getAllSchedules, schedule, user, users])

    return (
        <div>
            <h1>Schedules</h1>
            {loading ? <Loading /> :
                schedules.map(m => {
                    return (
                        <SchedulesDetail schedule={m} scheduleDetail={scheduleDetail.find(e => e.schId === m.schId)} deleteFunc={deleteSchedule} updateSchedule={updateFunc} key={m.schId}/>
                    )
                })
            }
        </div>
    )
}

export default ScheduleList