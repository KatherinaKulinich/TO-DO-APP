import { RxCalendar } from 'react-icons/Rx'
import { IconContext } from 'react-icons'

interface TodoCreatedDateProps {
    todoDate: string;
    todoTime:string;
}

export const TodoCreatedDate:React.FC<TodoCreatedDateProps> = ({todoDate, todoTime}) => {
    return (
        <div className='flex gap-x-6'>
            <div className='flex gap-x-1 items-center'>
                <IconContext.Provider value={{ color: "#94a3b8" , size: "12"}}>
                    <RxCalendar />
                </IconContext.Provider>
                <p className='text-xs text-slate-400'>
                    {todoDate}
                </p>
            </div>
            <p className='text-xs text-slate-400'>
                {todoTime}
            </p>
        </div>
    )
}