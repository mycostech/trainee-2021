import { useEffect } from "react"
import userUserApi from "../hooks/useUserApi"
import UserDetail from "../component/Detail/UserDetail"

function UserList() {

    const [users, get_AllUser] = userUserApi()

    useEffect(() => {
      get_AllUser()
    }, [get_AllUser])

    return(
        <div>
            {users.map((u, key) => {
                return <UserDetail user={u} key={key} />
            })}
        </div>
    )
}
export default UserList