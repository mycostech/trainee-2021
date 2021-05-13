import ScheduleDetail from "./ScheduleDetail";
import User from "./User";

interface Schedule {
    schId: number
    title: string
    userId ? : number
    user ? : User
    scheduleDetail : ScheduleDetail
}

export default Schedule