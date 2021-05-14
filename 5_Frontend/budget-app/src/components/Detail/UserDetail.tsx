import React, { useState } from 'react'
import User from '../../models/User'


interface UserDetailProps {
    user: User
}

function UserDetail({user}: UserDetailProps) {
    
    return (
    <>
    <div style={{flex: 1}}>Name: {user.userid}</div>
    <div style={{flex: 1}}>FisrtName: {user.firstname}</div>
    <div style={{flex: 1}}>Lastname: {user.lastname}</div>
    <div style={{flex: 1}}>Username: {user.username}</div>
    <div style={{flex: 1}}>Email: {user.email}</div>
    <div style={{flex: 1}}>Password: {user.password}</div>
    <br/>
    </>

    )
}

export default UserDetail