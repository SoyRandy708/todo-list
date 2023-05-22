import React from "react";
import { TodoContext } from "../../context";
import { FaPlus } from "react-icons/fa"

function CreateTodoButton() {
    const {
        setOpenModal,
        openModal,
        setIsActive,
        isActive,
    } = React.useContext(TodoContext)    
    
    const changeState = () => {
        setOpenModal(!openModal)
        setIsActive(!isActive)
    }

    return (
        <button
            className={`newTodo ${isActive ? "activo" : ""}`}
            onClick={changeState} 
            >
            <FaPlus 
                className="icon"
            />
        </button>
    );
}

export { CreateTodoButton };