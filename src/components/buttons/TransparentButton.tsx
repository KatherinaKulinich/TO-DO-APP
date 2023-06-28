
interface TransparentButtonProps {
    buttonText: string;
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
    isDisabled: boolean;
    buttonColor:string;
}


export const TransparentButton:React.FC<TransparentButtonProps> = (
    {buttonText, onClickHandler, isDisabled, buttonColor}) => {
    return (
        <button 
            type='button' 
            className={`px-1 py-2 text-lg font-extrabold uppercase disabled:text-slate-400 ${buttonColor}`}
            disabled={isDisabled}
            onClick={onClickHandler}
        >
            {buttonText}
        </button>
    )
}