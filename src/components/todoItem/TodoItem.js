import "./TodoItem.css"

function TodoItem(props) {
  return (
    <li>
      <span 
        className={`${props.completed ? "icon-active" : ""}`}
        onClick={props.onComplete}
      >V</span>
      <p>{props.text}</p>
      <span 
        className={"icon-delete"}
        onClick={props.onDelete}
      >X</span>
    </li>
  );
}

export { TodoItem }