interface RegularButtonProps {
    buttonType: "button" | "submit";
    buttonText: string;
    onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
    buttonAdditionalStyles: string;
}

export const RegularButton:React.FC<RegularButtonProps> = (
    {buttonType, buttonText, onClickHandler, buttonAdditionalStyles}) => {

    return (
        <button 
            type={buttonType}
            className={`px-4 py-2 text-slate-50 text-sm uppercase bg-gradient-to-r ${buttonAdditionalStyles}`}
            onClick={onClickHandler}
        >
            {buttonText}
        </button>
    )
}