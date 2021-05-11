interface IShowAgeProps{
    Age: number
}

function ShowAge({Age}: IShowAgeProps){

    return (
        <div>
            Show Age: {Age}
        </div>
    )
}

export default ShowAge