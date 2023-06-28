import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getTodos } from "../rdx/todoSlice";
import { TodoItem } from "./TodoItem";
import { Todo } from "../types";


interface TodoListProps {
    onOpenEditModal: (event: React.MouseEvent) => void;
    todos: Todo[]
}

 export const TodoList: React.FC<TodoListProps> = ({todos, onOpenEditModal}) => {

    const dispatch = useAppDispatch();
    const todosList = useAppSelector(state => state.todos.listTodos)

    useEffect(() => {
        dispatch(getTodos())
    },[])



    return (  
        <div className="min-h-[300px] max-h-[400px] overflow-scroll">
            {todosList.length > 0 ? todos.length > 0 ? (
                <ul>
                    {todos.map(({id, text, isCompleted, date, time}) => (
                        <TodoItem 
                            key={id}
                            id={id}
                            text={text}
                            isCompleted={isCompleted}
                            date={date} 
                            time={time}  
                            onOpenEditModal={onOpenEditModal}

                        />
                    ))}
                </ul>
            ) : (
                <p className="text-sm uppercase text-center text-slate-200">
                    no tasks in this category
                </p>
            ) : (
                 <p className="uppercase text-center font-semibold text-slate-400">
                    no tasks yet
                </p>
            )}
       </div>
    );
}
 
