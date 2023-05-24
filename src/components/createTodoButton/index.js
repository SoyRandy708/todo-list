import React from "react";
import { TodoContext } from "../../context";
import { FaPlus } from "react-icons/fa"

function CreateTodoButton() {
    const {
        setOpenModal,
        openModal,
        setOpenForm,
        openForm,
    } = React.useContext(TodoContext)    
    
    const changeState = () => {
        setOpenModal(!openModal)
        setOpenForm(!openForm)
    }

    return (
        <button
            className={`newTodo ${openModal ? "activo" : ""}`}
            onClick={changeState} 
            >
            <FaPlus 
                className="icon"
            />
        </button>
    );
}

export { CreateTodoButton };