import {BsPlusLg} from 'react-icons/Bs';
import { IconContext } from "react-icons";

interface MainButtonProps {
    onOpenModalAddTodo: React.MouseEventHandler<HTMLButtonElement> ;
}


export const MainButton:React.FC<MainButtonProps> = ({onOpenModalAddTodo}) => {
    return (
        <button 
            type='button' 
            className='w-14 h-14 md:w-20 md:h-20 absolute -bottom-7 right-10 md:-bottom-10 md:right-20  flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 to-sky-500  hover:from-cyan-400 hover:to-sky-600' 
            onClick={onOpenModalAddTodo}
        >
            <IconContext.Provider value={{ color: "white" , size: "30"}}>
                <BsPlusLg/>
            </IconContext.Provider>
        </button>
    )
}