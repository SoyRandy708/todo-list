import React from 'react';
import { useLocaStorage } from '../hooks/useLocalStorage';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: true },
// ]
// localStorage.setItem("TODOS_V1", defaultTodos)


export function App() {
  const [searchValue, setSearchValue] = React.useState("")
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocaStorage("TODOS_V1", [])

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => { 
    const todoText = todo.text.toLocaleLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
  })

  const completeTodo = ({text, completed}) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = !completed
    saveTodos(newTodos)
  }

  const deleteTodo = ({text}) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
  
  return (
    <AppUI 
      totalTodos={totalTodos}
      searchedTodos={searchedTodos}
      setSearchValue={setSearchValue}
      searchValue={searchValue}
      completedTodos={completedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  )
}
