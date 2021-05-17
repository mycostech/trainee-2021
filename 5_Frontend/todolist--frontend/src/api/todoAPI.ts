import axios from 'axios'
import todo from '../models/todolist'

const API_URL = process.env.REACT_APP_API_URL|| 'http://localhost:5000/api/todoitems'

const userApi = {

    getUsers: () => {
        return axios.get<todo[]>(API_URL )
    },
    postUser: (Todo: todo) => {
        return axios.post<todo>(API_URL + '/posts', {...Todo})
        
    },
    deleteUser: (Todo :any) => {
        return axios.delete<todo>(API_URL + '/todo/'+Todo)
    }
}

export default userApi
