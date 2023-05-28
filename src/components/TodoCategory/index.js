import React from "react"
import { TodoContext } from "../../context"

export function TodoCategory() {
    const {
        setCategorySelected
    } = React.useContext(TodoContext)

    const verTodos = () => {
        setCategorySelected("TODOS")
    }

    const verCompletados = () => {
        setCategorySelected("COMPLETADOS")
    }

    const verPendientes = () => {
        setCategorySelected("PENDIENTES")
    }

    return (
        <div className="todo__category">
            <button
                className="todo__category__button"
                onClick={verTodos}
            >VER TODOS</button>
            <button
                className="todo__category__button"
                onClick={verCompletados}
            >VER COMPLETADOS</button>
            <button
                className="todo__category__button"
                onClick={verPendientes}
            >VER PENDIENTES</button>
        </div>
    )
}