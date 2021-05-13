import ScheduleCategory from '../../models/ScheduleCategory'
import './scheduleCat-detail.css'

interface ScheduleCategoryDetailProps {
    scheduleCat: ScheduleCategory
}

function ScheduleCategoryDetail({
    scheduleCat
}: ScheduleCategoryDetailProps) {

    return (
        <div className={scheduleCat.catCode+"cat"}>
               {scheduleCat.descriptions}
        </div>

    )
}

export default ScheduleCategoryDetail