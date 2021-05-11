interface ShowNameProps {
    childName: string
}

function ShowName ({childName}: ShowNameProps){

    return (
        <div>
            Name: {childName}
        </div>
    )
}

export default ShowName