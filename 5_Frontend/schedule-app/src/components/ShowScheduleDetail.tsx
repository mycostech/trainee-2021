import dateFormat from 'dateformat';
import DeleteButton from './DeleteButton'
import ScheduleDetail from '../models/ScheduleDetail';

interface ShowScheduleDetailProps {
    scheduleDetail?: ScheduleDetail
}

const DEFAULT_SCHEDULEDETAIL = {
    schId: 0,
    schDate: new Date(),
    category: 'N'
}

function ShowScheduleDetail({scheduleDetail = DEFAULT_SCHEDULEDETAIL}: ShowScheduleDetailProps) {

    return (
        <div style={{
            margin: 50,
            flex: 1
        }}>
            Date: {dateFormat(scheduleDetail.schDate, "dS mmmm yyyy")}
        {scheduleDetail.note !==null && 
            <div>
                Note: {scheduleDetail.note}
            </div>
        }
        
        </div>
    )

}

export default ShowScheduleDetail