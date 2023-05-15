import React from 'react';
import { TodoCounter } from '../components/todoCounter/TodoCounter';
import { TodoSearch } from '../components/todoSearch/TodoSearch';
import { TodoList } from '../components/todoList/TodoList';
import { TodoItem } from '../components/todoItem/TodoItem';
import { CreateTodoButton } from '../components/createTodoButton/CreateTodoButton';

export function AppUI({
    totalTodos,
    searchedTodos,
    setSearchValue,
    searchValue,
    completedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <React.Fragment>
            <TodoCounter 
            completed={completedTodos} 
            total={totalTodos} 
            />
            <TodoSearch 
            searchValue = {searchValue}
            setSearchValue={setSearchValue}
            />
    
            <TodoList>
            {searchedTodos.map(todo => (
                <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo)}
                onDelete={() => deleteTodo(todo)}
                />
            ))}
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
    );
}