import { useCallback, useState } from "react"
import scheduleDetailApi from "../api/schduleDetailAPI"
import ScheduleDetail from "../models/ScheduleDetail"

const useScheduleDetailApi = () => {
    const DEFAULT_SCHEDULEDETAIL = {
        schId: 0,
        schDate: new Date(),
        // note: '',
        category: 'N'
    }
    const [scheduleDetails, setScheduleDetails] = useState<ScheduleDetail[]>([])
    const [scheduleDetail, setScheduleDetail] = useState<ScheduleDetail>(DEFAULT_SCHEDULEDETAIL)

    const getAllScheduleDetail = useCallback(
        async () => {
            //setLoading(true)
            const result = await scheduleDetailApi.getAllScheduleDetail()
            console.log(result)
            setScheduleDetails(result.data)
            //setLoading(false)
        },
        [setScheduleDetails]
    )

    const getScheduleDetail = useCallback(
        async (id: number) => {
            //setLoading(true)
            const result = await scheduleDetailApi.getScheduleDetail(id)
            console.log(result)
            setScheduleDetail(result.data)
            //setLoading(false)
        },
        [setScheduleDetail]
    )
    
    return [scheduleDetails, scheduleDetail, getAllScheduleDetail, getScheduleDetail] as const
}

export default useScheduleDetailApi