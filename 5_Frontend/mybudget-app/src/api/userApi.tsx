import axios from "axios"
import User from "../models/User"

const API_URL = process.env.REACT_APP_API_URL

const userApi = {
    getAllUser() {
        return axios.get<User[]>((`${API_URL}Customers`))
    }
}
export default userApi