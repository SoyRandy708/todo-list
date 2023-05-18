import React from "react";
import { TodoContext } from "../../context";

export function TodoCounter() {
    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext)

    return (
        <>
            {totalTodos === completedTodos && (
                <h1>
                    !Felicidades has completado todas las tareas!
                </h1>

            )}
            {totalTodos !== completedTodos && (
                <h1>
                    Has completado {completedTodos} de {totalTodos} TODOS
                </h1>
            )}
        </>
    );
}