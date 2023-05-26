import React from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider({ children }) {
    const [searchValue, setSearchValue] = React.useState("")
    const [openModal, setOpenModal] = React.useState(false)
    const [openForm, setOpenForm] = React.useState(false)
    const [mensaje, setMensaje] = React.useState(false)
    const [mensajeTexto, setMensajeTexto] = React.useState("")

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V1", [])

    const completedTodos = todos.filter(todo => todo.completed).length

    const totalTodos = todos.length
    
    const searchedTodos = todos.filter(todo => { 
        const todoText = todo.title.toLocaleLowerCase()
        const searchText = searchValue.toLowerCase()
        return todoText.includes(searchText)
    })
    
    const completeTodo = ({title, completed}) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
            (todo) => todo.title === title
        )
        newTodos[todoIndex].completed = !completed
        saveTodos(newTodos)
    }
    
    const deleteTodo = ({title}) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
            (todo) => todo.title === title
        )
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    const addTodo = ({title, description}) => {
        const newTodos = [...todos]
        newTodos.push({
            title,
            description,
            completed: false,
        })
        saveTodos(newTodos)
    }

    return (
        <TodoContext.Provider value={{
            setSearchValue,
            searchValue,
            setOpenModal,
            openModal,
            setOpenForm,
            openForm,
            setMensaje,
            mensaje,
            setMensajeTexto,
            mensajeTexto,
            todos,
            totalTodos,
            searchedTodos,
            completedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            loading,
            error,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }