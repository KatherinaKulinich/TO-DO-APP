import { ThemeContext } from "../../ThemeProvider";
import { CgClose } from 'react-icons/Cg';
import { IconContext } from 'react-icons'
import { useContext } from "react";


interface ModalProps {
    children: React.ReactNode,
    onCloseModal: (event: React.MouseEvent) => void;
}



export const Modal: React.FC<ModalProps> = ({children, onCloseModal}) => {

    const {theme} = useContext(ThemeContext);

    return (  
        <div className="w-full  fixed top-0 right-0 bottom-0 left-0 bg-slate-700/80 backdrop-blur-sm">
            <div className={`w-full max-w-lg absolute left-0 right-0 top-1/2 sm:left-1/2 sm:-translate-x-1/2 -translate-y-1/2 p-11 rounded-lg 
                ${theme === 'light' ? 'bg-sky-100/25' : 'bg-slate-200/25'}
            `}>
                {children}
                <div 
                    className="absolute top-2 right-2 p-1 hover:bg-slate-50/25 rounded" 
                    onClick={onCloseModal}
                >
                    <IconContext.Provider value={{ color: "#22d3ee" , size: "30"}}>
                        <CgClose/>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );
}
 