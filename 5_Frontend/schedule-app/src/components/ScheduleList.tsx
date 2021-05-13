import React, { useEffect } from "react";
import Schedule from "../models/Schedule";
import ScheduleDetail from "../models/ScheduleDetail";
import Loading from "./Loading";
import SchedulesDetail from "./SchedulesDetail/SchedulesDetail";

interface ScheduleListProps {
    getAllSchedules: any
    getAllScheduleDetail: any
    loading: boolean
    schedules: Schedule[]
    scheduleDetail: ScheduleDetail[]
    deleteSchedule: any 
    updateFunc: any
}

function ScheduleList({
    getAllSchedules,
    getAllScheduleDetail,
    loading,
    schedules,
    scheduleDetail,
    deleteSchedule,
    updateFunc
}: ScheduleListProps) {

    useEffect(() => {
        getAllSchedules()
        getAllScheduleDetail()
    }, [getAllSchedules, getAllScheduleDetail])

    return (
        <div>
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

export default ScheduleList