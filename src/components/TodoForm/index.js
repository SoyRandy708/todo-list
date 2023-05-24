import React from "react"
import { TodoContext } from "../../context"

export function TodoForm() {
    const {
        setOpenForm,
        setOpenModal,
        setMensaje,
        setMensajeTexto,
        addTodo,
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState("")

    const onSubmit = (evento) => {
        evento.preventDefault()

        if (newTodoValue.trim() === "") {
            setMensaje(true)
            setMensajeTexto("No se pueden crear ToDo's vacíos")
            return
        }

        addTodo(newTodoValue)
        setOpenModal(false)
        setOpenForm(false)
    }

    const onCancel = () => {
        setOpenModal(false)
        setOpenForm(false)
    }
    
    const onChange = (evento) => {
        setNewTodoValue(evento.target.value)
    }

    return (
        <form 
            className="TodoForm" 
            onSubmit={onSubmit}
        >
            <label className="TodoForm__label">Escribe tu nuevo ToDo</label>

            <textarea 
                className="TodoForm__textarea" placeholder="Lavar la ropa"
                value={newTodoValue}
                onChange={onChange}
            />

            <div className="TodoForm__buttonContainer">
                <button
                    className="TodoForm__button TodoForm__button--cancel"
                    onClick={onCancel}
                >Cancelar</button>

                <button
                    className="TodoForm__button TodoForm__button--add"
                >Añadir</button>
            </div>
        </form>
    )
}