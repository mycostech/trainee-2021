import React, { useState } from 'react'

const LoginForm = ({ handleSubmit }) => {
    const [email, setEmail] = useState('')

    const onsubmit = (e) => {
        e.preventDefault()
        handleSubmit(email)
    }

    return (
        <form onSubmit={onsubmit}>
            <p>Login Form</p>

            <div>
                <label htmlFor="input-email">EMAIL</label>
                <input
                    type="email"
                    value={email}
                    id="input-email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default LoginForm
