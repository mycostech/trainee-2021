import dateFormat from 'dateformat';
import DeleteButton from './Buttons/DeleteButton';

interface ShowUserDetailProps {
    id: number
    email: string
    phone?: string
    dob?: Date
}

function ShowUserDetail({id, email, phone, dob}: ShowUserDetailProps) {

    return (
        <div style={{
            margin: 50,
            flex: 1
        }}>
            Email: {email}
        {phone!==null && phone!=='' && 
            <div>
                Phone: {phone}
            </div>
        }
        {dob!==null &&

            <div>
                DOB: {dateFormat(dob, "dS mmmm yyyy")}
            </div>
        }          
        
        </div>
    )

}

export default ShowUserDetail