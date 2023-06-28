import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { editTodo } from "../../rdx/todoSlice";
import { RegularButton } from "../buttons/RegularButton";


interface ModalEditProps {
    onCloseModal: (event: React.MouseEvent) => void;
}



export const ModalEdit:React.FC<ModalEditProps> = ({onCloseModal}) => {

    const dispatch = useAppDispatch();
    const { text } = useAppSelector(state => state.todos.selectTodo);
    const [newValue, setNewValue] = useState(text)

    const onChangeInputValue:React.ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        setNewValue(event.target.value)
    }, [])

    const onSaveNewValue = useCallback((event:any) => {
        event.preventDefault()
        dispatch(editTodo(newValue))
        onCloseModal(event)
    }, [dispatch, newValue])



    return (  
        <div className="w-full flex flex-col gap-y-7">
            <h2 className="uppercase text-center text-sm md:text-xl font-bold text-cyan-400">
                Edit to do item:
            </h2>
            <form 
                className="md:h-12 w-full  flex flex-col md:flex-row gap-7  md:gap-0 items-center"
                onSubmit={onSaveNewValue}
            >
                <label htmlFor="todoInput"></label>
                <input 
                    type="text" 
                    name="" 
                    id="todoInput"
                    className="w-full h-full rounded-lg md:rounded-r-none rounded-l-lg border-0 outline-0 cursor-cell text-slate-800" 
                    onChange={onChangeInputValue}
                    value={newValue}
                />
                <RegularButton 
                    buttonType={'submit'} 
                    buttonText={"Save"} 
                    buttonAdditionalStyles={"h-full rounded-lg md:rounded-l-none md:rounded-r-lg bg-gradient-to-r from-cyan-300 to-sky-500 hover:from-cyan-400 hover:to-sky-600"}
                />
            </form>
        </div>
    )
}
 
