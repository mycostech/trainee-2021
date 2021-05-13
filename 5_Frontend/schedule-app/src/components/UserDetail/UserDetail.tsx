import React, { useState } from 'react'
import User from '../../models/User'
import DeleteButton from '../DeleteButton'
import ShowUserDetail from '../ShowUserDetail'
import UserUpdateForm from '../UserUpdateForm'
import './user-detail.css'

interface UserDetailProps {
    user: User
    deleteFunc: any
    updateFunc: (id: number, user: User) => any
}

function UserDetail({
    user,
    deleteFunc,
    updateFunc
}: UserDetailProps) {
    const [edit,setEdit] = useState<boolean>(false)
    const [toggleShow, setToggleShow] = useState(false)
    return (
        <>
            {!edit && 
                <div className="user-detail"
                    onClick={() => setToggleShow(pre => !pre)}
                >
                    <div style={{
                        flex: 1
                    }}>
                        ID: {user.userId}
                    </div>
                    <div style={{
                        flex: 1
                    }}>
                        {user.firstName} {user.lastName}
                    </div>
        
                    {(toggleShow) && 
                        <ShowUserDetail id={user.userId} email={user.email} phone={user.phoneNumber} dob={user.dob}/>
                    }
                    <DeleteButton deleteFunc={deleteFunc} id={user.userId}/>   
                    <button onClick={() => setEdit(prev => !prev)}>Edit</button> 
                </div>
            }
            {edit && 
                <div className="user-detail">
                    <div style={{
                        flex: 1
                    }}>
                        <UserUpdateForm updateUser={updateFunc} user={user}/>
                    </div>
                    <div style={{
                        flex: 1
                    }}>
                        <DeleteButton deleteFunc={deleteFunc} id={user.userId}/>   
                        <button onClick={() => setEdit(prev => !prev)}>Edit</button> 
                    </div>
                    
                </div>
            }
        </>
    )
}

export default UserDetail