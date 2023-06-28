import { useCallback } from "react"
import { TransparentButton } from "./buttons/TransparentButton"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { completeAllTodos } from "../rdx/todoSlice";



interface ContainerFooterProps {
    onOpenModalToDelete:React.MouseEventHandler<HTMLButtonElement>
}



export const ContainerFooter:React.FC<ContainerFooterProps> = ({onOpenModalToDelete}) => {

    const dispatch = useAppDispatch();
    const todosList = useAppSelector(state => state.todos.listTodos)

    const onCompleteAllTodos = useCallback(() => {
        dispatch(completeAllTodos())
    }, [dispatch])



    return (
        <div className='w-full pt-5 flex justify-between border-t border-sky-300'>
            <TransparentButton 
                buttonText={"Complete All"} 
                onClickHandler={onCompleteAllTodos} 
                isDisabled={todosList.length === 0 ? true : false} 
                buttonColor={"text-sky-500 hover:text-sky-600"}
            />
            <TransparentButton 
                buttonText={"Delete All"} 
                onClickHandler={onOpenModalToDelete} 
                isDisabled={todosList.length === 0 ? true : false} 
                buttonColor={"text-indigo-900  hover:text-indigo-800"}
            />
        </div>
    )
}