import { useAppSelector } from "../hooks/hooks"

interface FilterProps {
    selectValue: string;
    onChangeSelectHandler: React.ChangeEventHandler<HTMLSelectElement> 
}



export const Filter:React.FC<FilterProps> = ({selectValue, onChangeSelectHandler}) => {
    
    const todosList = useAppSelector(state => state.todos.listTodos)

    const filterOptions = [
        {value: 'all', label: 'all'},
        {value: 'completed', label: 'completed'},
        {value: 'uncompleted', label: 'uncompleted'},
    ]

    return (
        <select 
            className="form-select rounded-md bg-sky-200 border-sky-300 text-slate-600 outline-0 disabled:bg-slate-300" 
            disabled={todosList.length === 0 ? true : false}
            onChange={onChangeSelectHandler}
            value={selectValue} 
        >
            {filterOptions.map(option => (
                <option 
                    value={option.value} 
                    key={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    )
}