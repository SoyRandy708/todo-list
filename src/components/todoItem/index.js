import { AiFillDelete, AiFillFileText } from "react-icons/ai"
import { FaCheck } from "react-icons/fa"

function TodoItem(props) {
  return (
    <li
      className={"tarea"}
    >
      <FaCheck 
        className={`icon ${props.completed ? "icon-active" : ""}`}
        onClick={props.onComplete}
      />
      <AiFillFileText 
        className={`icon ${props.completed ? "icon-active" : ""}`}
        onClick={props.onComplete}
      />
      <p
        className={"texto"}
      >{props.title}</p>

      <AiFillDelete 
        className={"icon icon-delete"}
        onClick={props.onDelete}
      />
    </li>
  );
}

export { TodoItem }