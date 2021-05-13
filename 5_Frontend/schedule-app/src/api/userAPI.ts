import axios from "axios"
import User from "../models/User"

const API_URL = process.env.REACT_APP_API_URL

const userApi = {
    getAllUser: () => {
        return axios.get<User[]>(API_URL + "api/users")
    },
    getUser: (userId: number) => {
        return axios.get<User>(API_URL + "api/users/" + userId)
    },
    postUser: (user: User) => {
        return axios.post<User>(API_URL + "api/users", user)
    },
    putUser: (uId: number, user: User) => {
        return axios.put<User>(API_URL + "api/users/" + uId, {uId,...user})
    },
    deleteUser: (userId: number) => {
        return axios.delete<User>(API_URL + "api/users/" + userId)
    }
}

export default userApi