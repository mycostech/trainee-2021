import React, { useEffect, useState } from "react";
import Schedule from "../models/Schedule";
import ScheduleDetail from "../models/ScheduleDetail";
import Loading from "./Loading";
import SchedulesDetail from "./SchedulesDetail/SchedulesDetail";
import Button from "./Buttons/PageButton"
import UserScheduleForm from "./UserScheduleForm";
import User from "../models/User";
import { abort } from "process";

interface UserScheduleListProps {
    getUserSchedule: any
    getAllScheduleDetail: any
    loading: boolean
    schedules: Schedule[]
    scheduleDetails: ScheduleDetail[]
    schedule: Schedule
    deleteSchedule: any
    id: number
    updateFunc: any
    addUserSchedule: any
    user: User
}

function UserScheduleList({
    getUserSchedule,
    getAllScheduleDetail,
    loading,
    schedules,
    scheduleDetails,
    schedule,
    deleteSchedule,
    id,
    updateFunc,
    addUserSchedule,
    user
}: UserScheduleListProps) {

    useEffect(() => {
        getUserSchedule(id)
        getAllScheduleDetail()
    }, [id, schedule, user, getUserSchedule])

    const [add,setAdd] = useState<boolean>(false)
    
    return (
        <div>
            <h1>Schedule</h1>
            {loading ? <Loading /> :
                schedules.map(m => {
                    return (
                        <SchedulesDetail schedule={m} scheduleDetail={scheduleDetails.find(e => e.schId === m.schId)} deleteFunc={deleteSchedule} updateSchedule={updateFunc} key={m.schId}/>
                    )
                })
            }
            <Button handleClick={() => setAdd(prev => !prev)} buttonText='+'/>
            {add && 
              <UserScheduleForm addUserSchedule={addUserSchedule} userId={id}/>
            }
        </div>
    )
}

export default UserScheduleList