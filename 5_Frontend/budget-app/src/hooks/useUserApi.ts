import { useCallback, useState } from "react"
import userApi from "../api/userAPI"
import User from '../models/User'


const useUserApi = () => {

    const [users, setUsers] = useState<User[]>([])

    const getAllUsers = useCallback(
        async () => {
            const result = await userApi.getUsers()
            setUsers(result.data)
        }, [setUsers],
    )

    return [users, getAllUsers] as const
}

export default useUserApi