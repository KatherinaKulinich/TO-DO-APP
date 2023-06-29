import { useCallback, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeProvider";
import { ContainerHeader } from "./ContainerHeader";
import { TodoList } from "./TodoList";
import { ContainerFooter } from "./ContainerFooter";
import { getTodos } from "../rdx/todoSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Todo } from "../types";


interface ContainerProps {
    onOpenEditModal: (event: React.MouseEvent) => void
    onOpenDeleteModal: (event: React.MouseEvent) => void
    onOpenAddModal: (event: React.MouseEvent) => void
}



export const Container:React.FC<ContainerProps> = (
    {onOpenEditModal, onOpenDeleteModal, onOpenAddModal}) => {
        
    const filterOptions = [
        {value: 'all', label: 'all'},
        {value: 'completed', label: 'completed'},
        {value: 'uncompleted', label: 'uncompleted'},
    ]

    const dispatch = useAppDispatch();
    const { theme } = useContext(ThemeContext);
    const todosList = useAppSelector(state => state.todos.listTodos)
    const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todosList)
    const [filterValue, setFilterValue] = useState(filterOptions[0].value)


    useEffect(() => {
        dispatch(getTodos())  
    },[])


    const onChangeFilterSelect:React.ChangeEventHandler<HTMLSelectElement> = useCallback((event) => {
        const value = event.target.value;
        setFilterValue(value)  
    },[filterValue])


    const onShowFilteredTodos = useCallback(() => {
        setFilteredTodos([])

        if (filterValue === filterOptions[1].value) {
            todosList.map((todo) => {
                if (todo.isCompleted === true) {
                    return setFilteredTodos(prev => [...prev, todo])
                }
            })
            return   
        }
        if (filterValue === filterOptions[2].value) {
            todosList.map((todo) => {
                if (todo.isCompleted === false) {
                    return setFilteredTodos(prev => [...prev, todo])
                }
            })
            return    
        }
        setFilteredTodos(todosList)
        return filteredTodos  
        
    },[filterValue, todosList])


    useEffect(() => {
        onShowFilteredTodos()
    }, [filterValue, todosList])



    return (
        <div className={`mx-auto rounded-lg p-2 md:p-6 w-full max-w-3xl h-[530px]
            ${theme === 'light' ? "border border-slate-400 bg-sky-200/50" : "border bg-sky-100/10" }
        `}>
            <ContainerHeader 
                onOpenAddModal={onOpenAddModal} 
                filteredTodos={filteredTodos} 
                selectValue={filterValue} 
                onChangeSelectHandler={onChangeFilterSelect}
            />
            <TodoList 
                onOpenEditModal={onOpenEditModal} 
                todos={filteredTodos}
            />
            <ContainerFooter onOpenModalToDelete={onOpenDeleteModal}/>
        </div>
    )
}