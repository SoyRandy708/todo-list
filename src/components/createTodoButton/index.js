import React from "react";
import { TodoContext } from "../../context";
import { FaPlus } from "react-icons/fa"

function CreateTodoButton () {
    const {
        setOpenModal,
        openModal,
        setOpenForm,
        openForm,
        setOpenView,
        openView,
        setMensaje,
        setMensajeTexto,
    } = React.useContext(TodoContext)

    const changeState = () => {
        if (openView) {
            setOpenView(false)
            setMensaje(false)
            setMensajeTexto("")
            return
        }

        if (setOpenForm && setOpenModal) {
            setMensaje(false)
            setMensajeTexto("")
        }

        setOpenModal(!openModal)
        setOpenForm(!openForm)

    }

    return (
        <button
            className={`newTodo ${openModal || openView ? "activo" : ""}`}
            onClick={changeState}
        >
            <FaPlus
                className="icon"
            />
        </button>
    );
}

export { CreateTodoButton };