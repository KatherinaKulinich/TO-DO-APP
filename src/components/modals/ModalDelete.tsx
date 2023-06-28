import { useCallback } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { deleteAllTodos } from "../../rdx/todoSlice";
import { RegularButton } from "../buttons/RegularButton";



interface ModalDeleteAllProps {
    onCloseModal: (event: React.MouseEvent) => void;
}



export const ModalToDelete:React.FC<ModalDeleteAllProps> = ({onCloseModal}) => {

    const dispatch = useAppDispatch();

    const onDeleteAllTodos = useCallback((event:React.MouseEvent) => {
        dispatch(deleteAllTodos())
        onCloseModal(event)
    },[dispatch])


    return (  
        <div className="w-full flex flex-col items-center gap-y-8">
            <h2 className="uppercase text-center text-2xl font-bold text-cyan-400">
                Are you sure?
            </h2>
            <p className="text-lg text-slate-50 font-light">
                Do tou really want to delete all items?
            </p>
            <div className="w-full flex justify-between">
                <RegularButton 
                    buttonType={"button"} 
                    buttonText={"Cancel"} 
                    onClickHandler={onCloseModal} 
                    buttonAdditionalStyles={"rounded from-cyan-300 to-sky-500 hover:from-cyan-400 hover:to-sky-600"}
                />
                <RegularButton 
                    buttonType={"button"} 
                    buttonText={"Delete"} 
                    onClickHandler={onDeleteAllTodos} 
                    buttonAdditionalStyles={"rounded from-lime-300 to-green-500 hover:from-lime-400 hover:to-green-600"}
                />
            </div>
        </div>
    );
}
 
