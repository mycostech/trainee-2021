import axios from 'axios'

export const getUsers = async() => {
    try {
        return axios.get('https://jsonplaceholder.typicode.com/posts').then(result => {
            console.log("Get all result", result)
            return result.data
        })
    } catch (error) {
        throw error
    }
}

export const createNewUser = async(data) => {
    try {
        await axios({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: data
        })
    } catch (error) {
        throw error
    }
}

export const updateUser = async(data) => {
    try {
        await axios.put('https://jsonplaceholder.typicode.com/posts/1', data)
    } catch (error) {
        throw error
    }
}

export const deleteUser = async(data) => {
    try {
        await axios({
            method: 'DELETE',
            url: `https://jsonplaceholder.typicode.com/posts/1`,
            // data: data
        }).then(result => {
            console.log("delete user ", result)
            return result
        })
    } catch (error) {
        throw error
    }
}