import { TodoCounter } from './components/todoCounter/TodoCounter';
import { TodoSearch } from './components/todoSearch/TodoSearch';
import { TodoList } from './components/todoList/TodoList';
import { TodoItem } from './components/todoItem/TodoItem';
import { CreateTodoButton } from './components/createTodoButton/CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: true },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

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
