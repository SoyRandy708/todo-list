import React from "react"
import { TodoContext } from "../../context"

export function TodoView() {
    const {
        setOpenView,
        todoSelected,
        updateTodo,
    } = React.useContext(TodoContext)

    const [openEdit, setOpenEdit] = React.useState(false)
    const [editedTodo, setEditedTodo] = React.useState({
        title: todoSelected.title,
        description: todoSelected.description,
    })

    const edit = () => {
        setOpenEdit(!openEdit)
        console.log(todoSelected)
    }

    const editTodo = (evento) => {
        setEditedTodo({
            ...editedTodo,
            [evento.target.name]: evento.target.value,
        })
    }

    const saveChanges = () => {
        if(editedTodo.title === todoSelected.title && editedTodo.description === todoSelected.description) {
            console.log("No hiciste modificaciones")
            return
        } else {
            updateTodo(todoSelected, editedTodo)
        }

        console.log("Cambios guardados")

        setOpenEdit(false)
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
                        onClick={() => setOpenView(false)}
                    >Cerrar</button>
                    <button
                        className="informacion__botones informacion__botones--edit"
                        onClick={edit}
                    >Editar</button>
                </div>
            </div>

            <div 
                className="editar" style={{ display: openEdit ? "flex" : "none" }}
            >
                <label className="editar__label">Modifica tu ToDo</label>
                <input 
                    className="editar__input"
                    value={editedTodo.title}
                    onChange={editTodo}
                    name="title"
                />

                <textarea 
                    className="editar__textarea"
                    value={editedTodo.description}
                    onChange={editTodo}
                    name="description"
                ></textarea>

                <div>
                    <button
                        className="editar__botones editar__botones--close"
                        onClick={edit}
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