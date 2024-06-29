import React from "react"
import { TodoContext } from "../../context"

export function TodoView () {
    const {
        setOpenView,
        todoSelected,
        updateTodo,
        setMensaje,
        setMensajeTexto,
    } = React.useContext(TodoContext)

    const [openEdit, setOpenEdit] = React.useState(false)
    const [editedTodo, setEditedTodo] = React.useState({
        title: todoSelected.title,
        description: todoSelected.description,
    })

    const change = () => {
        setOpenEdit(!openEdit)
    }

    const editTodo = (evento) => {
        setEditedTodo({
            ...editedTodo,
            [evento.target.name]: evento.target.value,
        })
    }

    const saveChanges = () => {
        if (editedTodo.title === todoSelected.title && editedTodo.description === todoSelected.description) {
            setMensaje(true)
            setMensajeTexto("No hiciste modificaciones")
            return
        } else if (editedTodo.title.trim() === "") {
            setMensaje(true)
            setMensajeTexto("No se pueden crear ToDo's sin titulo")
            return
        } else {
            updateTodo(todoSelected, editedTodo)
        }

        setMensaje(true)
        setMensajeTexto("Cambios guardados")

        setOpenEdit(false)
    }

    const onClose = () => {
        setOpenView(false)
        clearMensaje()
    }

    const clearMensaje = () => {
        setMensaje(false)
        setMensajeTexto("")
    }

    return (
        <div className="previsualizacion">
            <div
                className="informacion" style={{ display: openEdit ? "none" : "flex" }}
            >
                <h3> {todoSelected.title} </h3>
                <p> {todoSelected.description || "Sin descripcion"} </p>

                <div>
                    <button
                        className="informacion__botones informacion__botones--close"
                        onClick={onClose}
                    >Cerrar</button>
                    <button
                        className="informacion__botones informacion__botones--edit"
                        onClick={change}
                    >Editar</button>
                </div>
            </div>

            <div
                className="editar" style={{ display: openEdit ? "flex" : "none" }}
            >
                <label className="editar__label">Modifica tu ToDo</label>
                <input
                    placeholder="Titulo del ToDo"
                    className="editar__input"
                    value={editedTodo.title}
                    onChange={editTodo}
                    name="title"
                />

                <textarea
                    placeholder="Descripcion (Opcional)"
                    className="editar__textarea"
                    value={editedTodo.description}
                    onChange={editTodo}
                    name="description"
                ></textarea>

                <div>
                    <button
                        className="editar__botones editar__botones--close"
                        onClick={change}
                    >Cancelar</button>
                    <button
                        className="editar__botones editar__botones--edit"
                        onClick={saveChanges}
                    >Guardar cambios</button>
                </div>
            </div>
        </div>
    )
}