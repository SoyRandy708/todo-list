import React from 'react';
import { TodoCounter } from './components/todoCounter/TodoCounter';
import { TodoSearch } from './components/todoSearch/TodoSearch';
import { TodoList } from './components/todoList/TodoList';
import { TodoItem } from './components/todoItem/TodoItem';
import { CreateTodoButton } from './components/createTodoButton/CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: true },
];

function App() {
  const [searchValue, setSearchValue] = React.useState("")
  const [todos, setTodos] = React.useState(defaultTodos)

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length
  
  return (
    <React.Fragment>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} /
      >
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
