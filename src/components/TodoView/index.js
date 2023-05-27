import React from "react"
import { TodoContext } from "../../context"

export function TodoView() {
    const {
        setOpenView,
        todoSelected,
    } = React.useContext(TodoContext)

    console.log(todoSelected)

    return (
        <div className="todo-informacion">
            <h3> {todoSelected.title} </h3>
            <p> {todoSelected.description} </p>

            <div>
                <button
                    className="todo-informacion__botones todo-informacion__botones--close"
                    onClick={() => setOpenView(false)}
                >Cerrar</button>
                <button
                    // AGREGAR FUNCION DE EDITAR TODO
                    className="todo-informacion__botones todo-informacion__botones--edit"
                >Editar</button>
            </div>
        </div>
    )
}