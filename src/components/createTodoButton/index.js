import React from "react";
import { TodoContext } from "../../context";
import { FaPlus } from "react-icons/fa"

function CreateTodoButton() {
    const {
        setOpenModal,
        openModal,
    } = React.useContext(TodoContext)

    return (
        <button
            className={"newTodo"}
            onClick={() => setOpenModal(!openModal)} 
        >
        <FaPlus 
            className="icon"
        />
        </button>
    );
}

export { CreateTodoButton };