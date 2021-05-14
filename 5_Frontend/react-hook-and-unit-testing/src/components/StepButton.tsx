interface StepButtonProps{
    handleClick: () => void,
    buttonText: string
}

function StepButton({
    handleClick,
    buttonText
}: StepButtonProps) {

    return (
        <button onClick={() => handleClick()}>{buttonText}</button>
    )
}
export default StepButton;