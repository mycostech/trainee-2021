import Schedule from "./Schedule";
import ScheduleCategory from "./ScheduleCategory";

interface ScheduleDetail {
    schId: number
    schDate : Date
    note ? : string
    category : string
    scheduleCategory ? : ScheduleCategory
    schedule ? : Schedule
}

export default ScheduleDetail