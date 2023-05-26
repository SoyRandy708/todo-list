import React from 'react';
import { TodoContext } from '../context';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { TodosEmpty } from '../components/TodosEmpty';
import { TodosMatches } from '../components/TodosMatches';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { Mensaje } from '../components/Mensaje';

export function AppUI() {
    const {
        totalTodos,
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openForm,
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}
                {error && <TodosError />}
                {(!loading && totalTodos < 1) && <TodosEmpty />}
                {(!loading && totalTodos > 0 && searchedTodos.length < 1) && <TodosMatches />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.title}
                        title={todo.title}
                        description={todo.description}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo)}
                        onDelete={() => deleteTodo(todo)}
                    />
                ))}
            </TodoList> 

            <CreateTodoButton />
            
            {openForm && (
                <Modal>
                    <TodoForm />
                    <Mensaje />
                </Modal>
            )}

        </React.Fragment>
    );
}