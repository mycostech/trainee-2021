interface IStepBtnProps{
    handleClick: () => void,
    btnText: string,
    classCss?: string
}

function StepBtn({
    handleClick,
    btnText,
    classCss = ''
    }: IStepBtnProps) {

    return (
        <>
            <button className={classCss} onClick={() => handleClick()}>{btnText}</button>
        </>
    )
}

export default StepBtn;