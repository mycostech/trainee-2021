
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
    deleteUser: (note :any) => {
        return axios.delete<Note>(API_URL + 'Notes/'+note)
    },
    updateUser: (note :Note) => {
        return axios.put<Note>(API_URL + 'Notes/' + note.id + '/' ,{...note})
    }
}

export default userApi