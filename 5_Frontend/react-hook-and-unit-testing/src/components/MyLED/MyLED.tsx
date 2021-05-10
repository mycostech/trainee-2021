
interface MyLEDProps {
    isDanger?: boolean
    text?: string
}

function MyLED({
    isDanger,
    text
}: MyLEDProps) {

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