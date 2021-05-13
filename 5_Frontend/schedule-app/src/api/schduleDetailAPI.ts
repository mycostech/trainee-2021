import axios from "axios"
import Schedule from "../models/ScheduleDetail"

const API_URL = process.env.REACT_APP_API_URL

const scheduleApi = {
    getAllScheduleDetail: () => {
        return axios.get<Schedule[]>(API_URL + "api/schedules/detail")
    },
    getScheduleDetail: (scheduleId: number) => {
        return axios.get<Schedule>(API_URL + "api/schedules/" + scheduleId + "/detail")
    }
}

export default scheduleApi