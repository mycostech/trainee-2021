import React, { useState } from 'react'

const MyValidateForm = ({ handleSubmit }) => {
    const [isError, setIsError] = useState(false)
    const [email, setEmail] = useState('')
    const validateEmail = (nonValidateEmail) => {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            nonValidateEmail
        )
    }
    const onsubmit = (e) => {
        e.preventDefault()

        if (validateEmail(email)) {
            setIsError(false)
            handleSubmit(email)
        } else {
            setIsError(true)
        }
    }

    return (
        <form onSubmit={onsubmit}>
            <p>Login Form</p>
            {isError && <p>Error! email is invalid</p>}
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

export default MyValidateForm
