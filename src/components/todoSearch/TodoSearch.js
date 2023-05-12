import "./TodoSearch.css"

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(evento) => setSearchValue(evento.target.value)} 
    />
  );
}

export { TodoSearch };
