import React from "react"
import { TodoContext } from "../../context"

export function TodoCategory() {
    const {
        categorySelected,
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
                className={`todo__category__button ${categorySelected === "TODOS" ? "selected" : ""}`}
                onClick={verTodos}
            >TODOS</button>
            <button
                className={`todo__category__button ${categorySelected === "COMPLETADOS" ? "selected" : ""}`}
                onClick={verCompletados}
            >COMPLETADOS</button>
            <button
                className={`todo__category__button ${categorySelected === "PENDIENTES" ? "selected" : ""}`}
                onClick={verPendientes}
            >PENDIENTES</button>
        </div>
    )
}