import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewUser } from './Action/UserAction'

const Form = () => {
    const [title, setTitle] = React.useState('');
    const [body, setbody] = React.useState('')
    const [userId, setUserId] = React.useState('')

    const dispatch = useDispatch()

    const onSubmitForm = () => {
        dispatch(addNewUser({ title, body, userId: parseInt(userId) }))
    }

    return (
        <>
            <input  type='text' placeholder='title' onChange={e => setTitle(e.target.value)}/>
            <br/>
            <br/>
            <textarea  placeholder='body' onChange={e => setbody(e.target.value)}></textarea>
            <br/>
            <br/>
            <input  type='number' placeholder='User ID' onChange={e => setUserId(e.target.value)}/>
            <br/>
            <br/>
            <button onClick={onSubmitForm}>Submit</button>
        </>
    )
}

export default Form