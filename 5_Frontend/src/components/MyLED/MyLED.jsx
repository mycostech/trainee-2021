import React from 'react'

const MyLED = ({ isDanger = false, text }) => {
    return (
        <div
            style={{
                width: '100%',
                height: '60px',
            }}
        >
            <p>
                {isDanger ? 'Danger!' : 'Success'} : {text}
            </p>
        </div>
    )
}

export default MyLED
