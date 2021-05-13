import { useCallback, useState } from "react"
import scheduleCategoryApi from "../api/scheduleCategoryAPI"
import ScheduleCategory from "../models/ScheduleCategory"

const useScheduleCategoryApi = () => {

    const [scheduleCat, setScheduleCat] = useState<ScheduleCategory[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getAllScheduleCategory = useCallback(
        async () => {
            setLoading(true)
            const result = await scheduleCategoryApi.getAllScheduleCategory()
            console.log(result)
            setScheduleCat(result.data)
            setLoading(false)
        },
        [setLoading, setScheduleCat]
    )
    
    return [scheduleCat, loading, getAllScheduleCategory] as const
}

export default useScheduleCategoryApi