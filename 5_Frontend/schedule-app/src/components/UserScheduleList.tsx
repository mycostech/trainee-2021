import React, { useEffect } from "react";
import Schedule from "../models/Schedule";
import ScheduleDetail from "../models/ScheduleDetail";
import Loading from "./Loading";
import SchedulesDetail from "./SchedulesDetail/SchedulesDetail";

interface UserScheduleListProps {
    getUserSchedule: any
    getAllScheduleDetail: any
    loading: boolean
    schedules: Schedule[]
    scheduleDetail: ScheduleDetail[]
    deleteSchedule: any
    id: number
    updateFunc: any
}

function UserScheduleList({
    getUserSchedule,
    getAllScheduleDetail,
    loading,
    schedules,
    scheduleDetail,
    deleteSchedule,
    id,
    updateFunc
}: UserScheduleListProps) {

    useEffect(() => {
        getUserSchedule(id)
        getAllScheduleDetail()
    }, [id])

    return (
        <div>
            <h1>Schedule</h1>
            {loading ? <Loading /> :
                schedules.map(m => {
                    return (
                        <div key={m.schId}>
                            <SchedulesDetail schedule={m} scheduleDetail={scheduleDetail.find(e => e.schId === m.schId)} deleteFunc={deleteSchedule} updateSchedule={updateFunc}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserScheduleList