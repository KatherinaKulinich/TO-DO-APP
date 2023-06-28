import { IconContext } from "react-icons";



interface IconButtonProps {
    buttonIcon: React.ReactNode;
    iconColor: string;
    iconSize: string;
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>
}

export const IconButton:React.FC<IconButtonProps> = ({buttonIcon, iconColor, iconSize, onClickHandler}) => {

    return (
        <button 
            type="button"
            className='active:bg-sky-500/10 rounded-lg p-1'
            onClick={onClickHandler}
        >
            <IconContext.Provider value={{ color: iconColor , size: iconSize}}>
                {buttonIcon}
            </IconContext.Provider>
        </button>
    )
}