import { IUser } from "../../model/IUserType"


interface MyProfile {
    name?: string 
}

function MyProfile({name}: MyProfile){

    return(
        <div>
            <div>
                <h3>Hello ! {name}</h3>
            </div>
        </div>
    )
}

export default MyProfile