import axios from 'axios'
import User from '../models/User'
//import User from '../models/User'

const API_URL = process.env.REACT_APP_API_URL

const userApi = {

    getUsers: () => {
        return axios.get<User[]>(API_URL + 'Customers')
    },

    postUser: (user: User) => {
        return axios.post<User>(API_URL + 'Customers/Register', {...user})
    }
}

export default userApi