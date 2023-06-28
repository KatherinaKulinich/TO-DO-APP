import { useState, useCallback } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { addTodo } from "../../rdx/todoSlice";
import { RegularButton } from "../buttons/RegularButton";


interface ModalAddProps {
    onCloseModal: (event: React.MouseEvent) => void;
}



export const ModalAdd:React.FC<ModalAddProps> = ({onCloseModal}) => {

    const [value, setValue] = useState('');
    const dispatch = useAppDispatch();


    const handleAddNewTodo = useCallback((event:any) => {
        event.preventDefault();

        if (value) {
            dispatch(addTodo(value));
        }
        setValue('');
        onCloseModal(event)

    }, [dispatch, value])


    const handleChangeValue:React.ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        const todoValue = event.target.value

        if (todoValue.trim() !== '') {
            setValue(todoValue);
        }
    }, [])



    return (  
        <form  
            name="todoForm"
            className="flex flex-col gap-y-7 w-full"
            onSubmit={handleAddNewTodo}
        >
            <h2 className="uppercase text-center text-2xl font-bold text-cyan-400">
                Add new task
            </h2>
            <div className=" md:h-12 w-full  flex flex-col md:flex-row gap-7  md:gap-0 items-center">
                <label htmlFor="todoInput"></label>
                <input 
                    type="text" 
                    name="" 
                    id="todoInput"
                    className="w-full h-full rounded-lg md:rounded-r-none rounded-l-lg border-0 outline-0 cursor-cell text-slate-800" 
                    onChange={handleChangeValue}
                    value={value}
                />
                <RegularButton 
                    buttonType={"submit"} 
                    buttonText={"Add"} 
                    buttonAdditionalStyles={" h-full rounded-lg md:rounded-l-none md:rounded-r-lg from-cyan-300 to-sky-500 hover:from-cyan-400 hover:to-sky-600"}
                />
            </div>
        </form>
    );
}
 
