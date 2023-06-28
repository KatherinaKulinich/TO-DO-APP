import { FiEdit } from 'react-icons/Fi'
import { RiDeleteBin2Line } from 'react-icons/Ri'
import { ThemeContext } from '../ThemeProvider'
import { useCallback, useContext } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { chooseTodoItem, removeTodo, toggleTodo } from '../rdx/todoSlice'
import { IconButton } from './buttons/IconButton'
import { TodoCreatedDate } from './TodoCreatedDate'
import { TodoCheck } from './todoCheck'


interface TodoItemProps {
    id: string;
    text: string;
    isCompleted: boolean;
    date: string;
    time: string;
    onOpenEditModal: (event: React.MouseEvent) => void;
}



export const TodoItem:React.FC<TodoItemProps> = (
    {id, text, date, isCompleted, time, onOpenEditModal}) => {

    const { theme } = useContext(ThemeContext);
    const dispatch = useAppDispatch();

    
    const onDeleteTodo = useCallback(() => {
        dispatch(removeTodo(id))
    }, [dispatch, id])

    const onToggleTodo = useCallback(() => {
        dispatch(toggleTodo(id))
    }, [dispatch, id])

    const onChooseTodo = useCallback((event:  React.MouseEvent) => {
        onOpenEditModal(event)
        dispatch(chooseTodoItem(id))
    },[dispatch, id])



    return (
        <li className={`p-1 md:p-3 flex justify-between items-center last:border-0 last:mb-8 border-b
            ${theme === 'light' ? "border-slate-300" : ""}
        `}>
            <div className='flex gap-x-2 items-center'>
                <TodoCheck 
                    isCompleted={isCompleted} 
                    onClickHandler={onToggleTodo}
                />
                <div className='flex flex-col'>
                    <p className={`
                        ${theme === 'light' ? "text-slate-700" : "text-slate-100"}
                        ${ isCompleted && 'line-through'}
                    `}>
                        {text}
                    </p>
                    <TodoCreatedDate
                        todoDate={date}
                        todoTime={time}
                    />
                </div>
            </div>
            <div className='flex gap-x-1 items-center'>
                <IconButton 
                    buttonIcon={<FiEdit/>} 
                    iconColor={'#0ea5e9'} 
                    iconSize={'24'} 
                    onClickHandler={onChooseTodo}
                />
                <IconButton 
                    buttonIcon={<RiDeleteBin2Line/>} 
                    iconColor={'#312e81"'} 
                    iconSize={'27'} 
                    onClickHandler={onDeleteTodo}
                />
            </div>
        </li>
    )
}

