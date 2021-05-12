
import axios from 'axios'
import Note from '../models/Note'

const API_URL = process.env.REACT_APP_API_URL

const userApi = {
    getUsers: () => {
        return axios.get<Note[]>(API_URL + 'Notes')
    },
    postUser: (note: Note) => {
        return axios.post<Note>(API_URL + 'Notes', {...note})
    },
    // getUser: (note: Note) => {
    //     return  axios.get<Note>(API_URL + 'Notes', + note.id)
    // },
    
    deleteUser: (note :any) => {
        return axios.delete<Note>(API_URL + 'Notes/'+note.id)
    }
}

export default userApi