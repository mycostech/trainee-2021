import React, { useState } from 'react'
import User from '../../models/User'
import ShowUserAddress from '../ShowUserAddress'
import './user-detail.css'

interface UserDetailProps {
    user: User
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
                Name: {user.name}
            </div>
            <div style={{
                flex: 1
            }}>
                Email: {user.email}
            </div>

            {(toggleShow && user.address) && 
                <ShowUserAddress address={user.address} />
            }
        </div>

    )
}

export default UserDetail