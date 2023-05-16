import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';

export function AppUI({
    totalTodos,
    searchedTodos,
    setSearchValue,
    searchValue,
    completedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
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
                {loading && <p>Estamos cargando...</p>}
                {error && <p>Hubo un error...</p>}
                {(!loading && searchedTodos.length < 1) && <p>!Has tu primer ToDo¡</p>}

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