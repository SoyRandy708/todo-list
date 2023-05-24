import React from "react";
import { useLocaStorage } from '../hooks/useLocalStorage';

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

    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            text,
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