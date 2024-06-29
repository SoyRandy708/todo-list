import React from "react";
import { AiFillDelete, AiFillFileText } from "react-icons/ai"
import { FaCheck } from "react-icons/fa"
import { TodoContext } from "../../context";

export function TodoItem (props) {
  const {
    setOpenView,
  } = React.useContext(TodoContext)

  const editIcon = () => {
    props.onView()
    setOpenView(true)
  }


  return (
    <li
      className={`tarea ${props.completed ? "tarea-completada" : ""}`}
    >
      <FaCheck
        className={`icon icon-active`}
        onClick={props.onComplete}
      />

      <AiFillFileText
        className={`icon icon-view`}
        onClick={editIcon}
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
