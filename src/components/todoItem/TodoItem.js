import "./TodoItem.css"
import { AiFillDelete } from "react-icons/ai"
import { FaCheck } from "react-icons/fa"

function TodoItem(props) {
  return (
    <li>
      {/* <span 
        className={`${props.completed ? "icon-active" : ""}`}
        onClick={props.onComplete}
      >V</span> */}
      <FaCheck 
        className={`icon ${props.completed ? "icon-active" : ""}`}
        onClick={props.onComplete}
      />
      <p>{props.text}</p>
      <AiFillDelete 
        className={"icon icon-delete"}
        onClick={props.onDelete}
      />
      {/* <span 
        className={"icon-delete"}
        onClick={props.onDelete}
      >X</span> */}
    </li>
  );
}

export { TodoItem }