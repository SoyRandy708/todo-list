import "./CreateTodoButton.css"
import { FaPlus } from "react-icons/fa"

function CreateTodoButton() {
  return (
    <button
    onClick={
      (evento) => {
        console.log("Hola")
        console.log(evento.target)
      }} 
    >
      <FaPlus 
        className="icon"
      />
    </button>
  );
}

export { CreateTodoButton };