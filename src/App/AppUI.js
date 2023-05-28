import React from 'react';
import { TodoContext } from '../context';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoCategory } from "../components/TodoCategory" ;
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { TodosEmpty } from '../components/TodosEmpty';
import { TodosMatches } from '../components/TodosMatches';
import { Modal } from '../components/Modal';
import { TodoView } from '../components/TodoView';
import { TodoForm } from '../components/TodoForm';
import { Mensaje } from '../components/Mensaje';

export function AppUI() {
    const {
        totalTodos,
        searchedTodos,
        selectedTodo,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openForm,
        openView,
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoCategory />

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
                        todo={todo}
                        title={todo.title}
                        description={todo.description}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo)}
                        onDelete={() => deleteTodo(todo)}
                        onView={() => selectedTodo(todo)}
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

            {openView && (
                <Modal>
                    <TodoView />
                    <Mensaje />
                </Modal>
            )}

        </React.Fragment>
    );
}