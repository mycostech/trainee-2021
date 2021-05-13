import axios from "axios"
import ScheduleCategory from "../models/ScheduleCategory"

const API_URL = process.env.REACT_APP_API_URL

const scheduleCategoryApi = {
    getAllScheduleCategory: () => {
        return axios.get<ScheduleCategory[]>(API_URL + "api/schedules/category")
    }
}

export default scheduleCategoryApi