import React from "react"
import { TodoContext } from "../../context"

export function TodoForm() {
    const {
        setOpenModal,
        addTodo,
        setIsActive,
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState("")

    const onSubmit = (evento) => {
        evento.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
        setIsActive(false)
    }

    const onCancel = () => {
        setOpenModal(false)
        setIsActive(false)
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