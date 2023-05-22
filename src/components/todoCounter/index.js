import React from "react";
import { TodoContext } from "../../context";

export function TodoCounter() {
    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext)

    let componeneteRenderizado

    if(totalTodos === 0) {
        componeneteRenderizado = <h1>ToDo List</h1>
    } else if(totalTodos === completedTodos) {
        componeneteRenderizado = <h1>!Felicidades has completado todas las tareas!</h1>

    } else {
        componeneteRenderizado = <h1>Has completado {completedTodos} de {totalTodos} TODOS</h1>
    }

    return (
        <>
            {componeneteRenderizado}
        </>
    );
}