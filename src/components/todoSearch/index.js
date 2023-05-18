import React from "react";
import { TodoContext } from "../../context";

export function TodoSearch() {
  const {
    searchValue, 
    setSearchValue
  } = React.useContext(TodoContext)

  return (
    <input 
      placeholder="Cortar cebolla"
      className={"search"}
      value={searchValue}
      onChange={(evento) => setSearchValue(evento.target.value)} 
    />
  );
}