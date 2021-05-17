import React, { useState } from 'react'
import todo from '../../models/todolist'
import todolist from '../../models/todolist'
import './user-detail.css'
interface UserDetailProps {
    user: todo
}

function UserDetail({
    user 
}: UserDetailProps) {
    console.log("sss", user)
    const [toggleShow, setToggleShow] = useState(false)
    return (
        <div className="user-detail"
            onClick={() => setToggleShow(pre => !pre)}
            // onClick={() => setToggleShow(pre => { return !pre })}
            // onClick={() => setToggleShow(!toggleShow)}
        >
            <div style={{
                
                flex: 2
            }}>
                Date: {user.date}
            </div>
            <div style={{
        
                flex: 2
            }}>
                TasKname: {user.taskname}
            </div>

            
        </div>

    )
}

export default UserDetail
