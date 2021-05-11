interface IShowNameProps {

    childName: string
}

function ShowName({childName}: IShowNameProps){

    return(
        <div>
            Show Name: {childName}
        </div>
    )
}

export default ShowName