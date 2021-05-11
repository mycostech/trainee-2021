interface StepButtonProps {
    handleClick: () => void
    buttonText: string
    cssClass?: string
}

function StepButton ({handleClick, buttonText,cssClass = ''}: StepButtonProps){
    return (
        <button className={cssClass} onClick={() => handleClick()}>
            {buttonText}
        </button>
    )

}

export default StepButton