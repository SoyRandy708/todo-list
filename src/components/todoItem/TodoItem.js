import "./TodoItem.css"

function TodoItem(props) {
  return (
    <li>
      <span className={`${props.completed ? "icon-active" : ""}`}>V</span>
      <p>{props.text}</p>
      <span className={"icon-delete"}>X</span>
    </li>
  );
}

export { TodoItem }