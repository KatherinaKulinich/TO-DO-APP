import { useContext, useState } from "react";
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Container } from './components/Container';
import { ThemeContext } from './ThemeProvider';
import { ModalToDelete } from "./components/modals/ModalDelete";
import { Modal } from "./components/modals/Modal";
import { ModalAdd } from "./components/modals/ModalAdd";
import { ModalEdit } from "./components/modals/ModalEdit";




export const App:React.FC = () => {

    const { theme } = useContext(ThemeContext);
    
    const [modalNewTodo, setModalNewTodo] = useState(false);
    const [modalDeleteAll, setModalDeleteAll] = useState(false);
    const [modalEditTodo, setModalEditTodo] = useState(false);


    const closeAnyModal = () => {
        modalDeleteAll ? setModalDeleteAll(!modalDeleteAll) : modalDeleteAll;
        modalNewTodo ? setModalNewTodo(!modalNewTodo) : modalNewTodo;
        modalEditTodo ? setModalEditTodo(!modalEditTodo) : modalEditTodo;
    }

    const toggleModalToAddNewTodo = (event: React.MouseEvent) => {
        event.stopPropagation();
        setModalNewTodo(!modalNewTodo);
    }
    const toggleModalToADeleteAll = (event: React.MouseEvent) => {
        event.stopPropagation();
        setModalDeleteAll(!modalDeleteAll);
    }

    const toggleModalEditTodo = (event: React.MouseEvent) => {
        event.stopPropagation();
        setModalEditTodo(!modalEditTodo);
    }

    return (
        <>
            <div className={`w-screen min-h-screen flex flex-col items-center justify-between gap-4
                ${theme === 'light' ? "bg-sky-100" : "bg-sky-900"}
            `}>
                <Header/>
                <main className="container mx-auto px-2 lg:px-4 xl:px-0">
                    <Container 
                        onOpenEditModal={toggleModalEditTodo} 
                        onOpenDeleteModal={toggleModalToADeleteAll} 
                        onOpenAddModal={toggleModalToAddNewTodo}
                    />
                </main>
                <Footer/>
            </div>


            {modalNewTodo && (
                <Modal onCloseModal={closeAnyModal}>
                    <ModalAdd onCloseModal={toggleModalToAddNewTodo}/>
                </Modal>
            )}
            {modalDeleteAll && (
                <Modal onCloseModal={closeAnyModal}>
                    <ModalToDelete onCloseModal={toggleModalToADeleteAll}/>
                </Modal>
            )}
            {modalEditTodo && (
                <Modal onCloseModal={closeAnyModal}>
                    <ModalEdit onCloseModal={toggleModalEditTodo}/>
                </Modal>
            )}
        </>
    )
}