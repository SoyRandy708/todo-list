import "./TodoCounter.css"

function TodoCounter({ total, completed }) {
  return (
    <>
      {total === completed && (
          <h1>
            !Felicidades has completado todas las tareas!
          </h1>

      )}
      {total !== completed && (
          <h1>
            Has completado {completed} de {total} TODOS
          </h1>
      )}
    </>
  );
}

export { TodoCounter };
