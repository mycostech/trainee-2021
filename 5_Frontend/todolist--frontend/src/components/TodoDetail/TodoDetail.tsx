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

    const [toggleShow, setToggleShow] = useState(false)
    return (
        <div className="user-detail"
            onClick={() => setToggleShow(pre => !pre)}
            // onClick={() => setToggleShow(pre => { return !pre })}
            // onClick={() => setToggleShow(!toggleShow)}
        >
            <div style={{
                flex: 1
            }}>
                Date: {user.DateTime}
            </div>
            <div style={{
                flex: 1
            }}>
                TasKname: {user.Taskname}
            </div>

            
        </div>

    )
}

export default UserDetail