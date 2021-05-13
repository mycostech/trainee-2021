import ScheduleDetail from "./ScheduleDetail";

interface ScheduleCategory {
    catCode: string
    descriptions: string
    scheduleDetail ? : ScheduleDetail
}

export default ScheduleCategory