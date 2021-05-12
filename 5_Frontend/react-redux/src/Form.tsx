import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { addNewUser, showLoading } from './Action/UserAction'
import { RootState } from './Store';

const Form = () => {
    const [title, setTitle] = React.useState('');
    const [body, setbody] = React.useState('')
    const [userId, setUserId] = React.useState('')
    
    let loading = useSelector((state:RootState) => state.UserReducer.loading)
    const dispatch = useDispatch()

    const onSubmitForm = () => {
        dispatch(showLoading())
        dispatch(addNewUser({ title, body, userId: parseInt(userId) }))
    }

    React.useEffect(() =>{
        console.log("asdasd" , loading)
    },[loading])

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
            { loading && <p>Loading...</p>}
        </>
    )
}

export default Form