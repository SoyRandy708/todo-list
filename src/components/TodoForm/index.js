import React from "react"
import { TodoContext } from "../../context"

export function TodoForm() {
    const {
        setOpenForm,
        setOpenModal,
        setMensaje,
        setMensajeTexto,
        addTodo,
        todos,
    } = React.useContext(TodoContext)

    const [newTodo, setNewTodo] = React.useState({
        title: "",
        description: "",
    })
    
    const onSubmit = (evento) => {
        evento.preventDefault()
        
        if (newTodo.title.trim() === "") {
            setMensaje(true)
            setMensajeTexto("No se pueden crear ToDo's sin titulo")
            return
        }

        const newTodos = [...todos]
        const todoExist = newTodos.some((todo) => 
            todo.title.trim() === newTodo.title.trim()
        )
        
        if(todoExist) {
            setMensaje(true)
            setMensajeTexto("No se pueden crear ToDo's duplicados")
            return
        }

        addTodo(newTodo)
        setOpenModal(false)
        setOpenForm(false)
    }

    const onCancel = () => {
        setOpenModal(false)
        setOpenForm(false)
    }
    
    const onChange = (evento) => {
        setNewTodo({
            ...newTodo,
            [evento.target.name]: evento.target.value
        })
    }

    return (
        <form 
            className="TodoForm" 
            onSubmit={onSubmit}
        >
            <label className="TodoForm__label">Escribe tu nuevo ToDo</label>

            <input 
                className="TodoForm__input"
                placeholder="Titulo del ToDo"
                name="title"
                value={newTodo.title}
                onChange={onChange}
            />

            <textarea 
                className="TodoForm__textarea" 
                placeholder="Descripcion (Opcional)"
                name="description"
                value={newTodo.description}
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