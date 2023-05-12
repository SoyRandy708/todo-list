import "./CreateTodoButton.css"

function CreateTodoButton() {
  return (
    <button
    onClick={
      (evento) => {
        console.log("Hola")
        console.log(evento.target)
      }} 
    >+</button>
  );
}

export { CreateTodoButton };