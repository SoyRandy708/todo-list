function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input 
      placeholder="Cortar cebolla"
      className={"search"}
      value={searchValue}
      onChange={(evento) => setSearchValue(evento.target.value)} 
    />
  );
}

export { TodoSearch };
