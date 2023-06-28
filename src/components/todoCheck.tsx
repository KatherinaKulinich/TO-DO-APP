import { BsCheckLg } from 'react-icons/Bs'
import { IconContext } from 'react-icons'

interface TodoCheckProps {
    isCompleted: boolean;
    onClickHandler:  React.MouseEventHandler<HTMLDivElement>
}

export const TodoCheck:React.FC<TodoCheckProps> = ({isCompleted, onClickHandler}) => {
    return (
        <div 
            className={`rounded-full w-8 h-8 md:w-9 md:h-9 border flex items-center justify-center 
                ${ isCompleted ? 'bg-gradient-to-r from-lime-300 to-green-500' : 'bg-slate-50'}
            `}
            onClick={onClickHandler}
        >
            {isCompleted && (
                <IconContext.Provider value={{ color: "#F7FCFE" , size: "18"}}>
                    <BsCheckLg/>
                </IconContext.Provider>
            )}
        </div>
    )
}