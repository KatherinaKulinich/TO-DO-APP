import { Todo } from "../types";
import { Filter } from "./Filter"
import { MainButton } from "./buttons/MainButton"



interface ContainerHeaderProps {
    onOpenAddModal: React.MouseEventHandler<HTMLButtonElement>;
    filteredTodos: Todo[];
    selectValue: string;
    onChangeSelectHandler: React.ChangeEventHandler<HTMLSelectElement>;
}



export const ContainerHeader:React.FC<ContainerHeaderProps> = (
    {onOpenAddModal, filteredTodos, onChangeSelectHandler, selectValue}) => {

    return (
        <div className='w-full pb-5 flex justify-between border-b border-sky-300 relative mb-8'>
            <div className='flex flex-col gap-y-2'>
                <h2 className='font-extrabold uppercase text-slate-400 text-md md:text-xl'>
                    tasks list
                </h2>
                <Filter 
                    selectValue={selectValue} 
                    onChangeSelectHandler={onChangeSelectHandler}
                />
            </div>
            <p className='font-extrabold uppercase text-sky-300 text-md md:text-lg'>
                {filteredTodos.length === 1 ? `1 item` : `${filteredTodos.length} items`}
            </p>
            <MainButton onOpenModalAddTodo={onOpenAddModal}/>
        </div>
    )
}