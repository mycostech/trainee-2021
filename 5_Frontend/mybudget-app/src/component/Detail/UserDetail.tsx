import User from "../../models/User"

interface UserDetail{
    user: User
}

function UserDetail({user}: UserDetail) {
    return(
        <div>
            UserId: {user.user_id} <br/>
            FirstName: {user.firstname} <br/>
            LastName: {user.lastname} <br/>
            Username: {user.username} <br/>
            Email: {user.email} <br/>
            Password: {user.password}
            <hr/>
        </div>
    )
}

export default UserDetail