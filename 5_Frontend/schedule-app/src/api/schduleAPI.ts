import axios from "axios"
import Schedule from "../models/Schedule"

const API_URL = process.env.REACT_APP_API_URL

const scheduleApi = {
    getAllSchedules: () => {
        return axios.get<Schedule[]>(API_URL + "api/schedules")
    },
    getSchedule: (scheduleId: number) => {
        return axios.get<Schedule>(API_URL + "api/schedules/" + scheduleId)
    },
    getUserSchedule: (userId: number) => {
        return axios.get<Schedule[]>(API_URL + "api/" + userId + "/schedules")
    },
    postSchedule: (schedule: Schedule) => {
        return axios.post<Schedule>(API_URL + "api/schedules", schedule)
    },
    postUserSchedule: (userId: number,schedule: Schedule) => {
        return axios.post<Schedule>(API_URL + "api/" + userId + "/schedules", {userId, ...schedule})
    },
    putSchedule: (scheduleId: number, schedule: Schedule) => {
        return axios.put<Schedule>(API_URL + "api/schedules/" + scheduleId, {scheduleId, ...schedule})
    },
    deleteSchedule: (scheduleId: number) => {
        return axios.delete<Schedule>(API_URL + "api/schedules/" + scheduleId)
    }
}

export default scheduleApi