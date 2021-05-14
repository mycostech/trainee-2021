import { useCallback, useState } from "react"
import userApi from "../api/userApi"
import User from "../models/User"

const useUserApi = () => {
    const [users, setUser] = useState<User[]>([])

    const get_AllUser = useCallback(
        async () => {
            const result = await userApi.getAllUser()
            setUser(result.data)
        }, [setUser]
    )

    return [users, get_AllUser] as const
}

export default useUserApi