interface PageButtonProps {
    handleClick: () => void
    buttonText: string
    cssClass?: string
}

function PageButton ({handleClick, buttonText,cssClass = ''}: PageButtonProps){
    return (
        <button className={cssClass} onClick={() => handleClick()}>
            {buttonText}
        </button>
    )
}

export default PageButton