 
import axios from 'axios'
import User from '../models/User'

const API_URL = process.env.REACT_APP_API_URL

// const u:User =  {
//     id: 1,
//     name: "aaa",
//     email: "aaaa",
//     phone: "21231",
//     website: "dsf"
// }

// {
//     ...user,
// id: Math.random()}

const userApi = {

    getUsers: () => {
        //return axios.get<User[]>(API_URL + 'users')
        return axios.get<User[]>(API_URL + 'api/Customers')
    },
    postUser: (user: User) => {
        return axios.post<User>(API_URL + 'posts', {...user,
        id: Math.random()})
    }

    
}

export default userApi