interface ShowPrimeProps {
    num: number,
    not ? : string
}

function ShowPrime ({num, not = ''}: ShowPrimeProps){

    return (
        <div>
            {num} is {not}a Prime Number.
        </div>
    )
}

export default ShowPrime