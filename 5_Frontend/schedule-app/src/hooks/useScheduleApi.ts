import { useCallback, useEffect, useState } from "react"
import scheduleApi from "../api/schduleAPI"
import Schedule from "../models/Schedule"

const useScheduleApi = () => {
    const DEFAULT_SCHEDULE = {
        schId: 0,
        title: '',
        scheduleDetail: {
            schId: 0,
            schDate: new Date(),
            //note: '',
            category: 'N' 
        }
    }
    const [schedules, setSchedules] = useState<Schedule[]>([])
    const [schedule, setSchedule] = useState<Schedule>(DEFAULT_SCHEDULE)
    const [loading, setLoading] = useState<boolean>(false)


    const getAllSchedules = useCallback(
        async () => {
            setLoading(true)
            const result = await scheduleApi.getAllSchedules()
            console.log(result)
            setSchedules(result.data)
            setLoading(false)
        },
        [setLoading, setSchedules]
    )

    const getSchedule = useCallback(
        async (id: number) => {
            setLoading(true)
            const result = await scheduleApi.getSchedule(id)
            console.log(result)
            setSchedule(result.data)
            setLoading(false)
        },
        [setLoading, setSchedule]
    )

    const getUserSchedule = useCallback(
        async (id: number) => {
            setLoading(true)
            const result = await scheduleApi.getUserSchedule(id)
            console.log(result)
            setSchedules(result.data)
            setLoading(false)
        },
        [setLoading, setSchedules]
    )

    const addSchedule = useCallback(
        async (s: Schedule) => {
            setLoading(true)
            const newSchedule = await scheduleApi.postSchedule(s)
            console.log("addSchedule : ", newSchedule)
            //setSchedules(newSchedule.data)
            setLoading(false)
        },
        [setLoading]
    )

    const addUserSchedule = useCallback(
        async (id: number,s: Schedule) => {
            setLoading(true)
            const newSchedule = await scheduleApi.postUserSchedule(id,s)
            console.log("addSchedule : ", newSchedule)
            //setSchedules(newSchedule.data)
            setLoading(false)
        },
        [setLoading]
    )

    const updateSchedule = useCallback(
        async (id: number,s: Schedule) => {
            setLoading(true)
            const nSchedule = await scheduleApi.putSchedule(id,s)
            console.log("updateUser : ", nSchedule)
            // setUser(newUser.data)
            setLoading(false)
        },
        [setLoading]
    )

    const deleteSchedule = useCallback(
        async (schId: number) => {
            setLoading(true)
            await scheduleApi.deleteSchedule(schId)
            console.log("deleteSchedule : ", schId)
            //setSchedule(newSchedule.data)
            setLoading(false)
        },
        [setLoading]
    )
    
    return [schedules, schedule, loading, getAllSchedules, getSchedule, getUserSchedule, addSchedule, addUserSchedule, updateSchedule, deleteSchedule] as const
}

export default useScheduleApi