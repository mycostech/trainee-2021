interface StepButtonProps {
    handleClick: () => void;
    buttonText: string
    cssclass?: string;
}
function StepButton({ handleClick, buttonText, cssclass = '' }: StepButtonProps) {
    return (
        <button className={cssclass} onClick={() => handleClick()}>
            {buttonText}
        </button>
    )
}

export default StepButton