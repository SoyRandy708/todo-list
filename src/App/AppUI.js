import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { TodosEmpty } from '../components/TodosEmpty';

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
                {loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}
                {/* HAS ANIMACIONES PARA EL ESTADO DE ERROR Y CARGA */}
                {error && <TodosError />}
                {(!loading && searchedTodos.length < 1) && <TodosEmpty />}

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