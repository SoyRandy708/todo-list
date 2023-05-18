import React from "react";
import { useLocaStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider({ children }) {
    const [searchValue, setSearchValue] = React.useState("")

    const [openModal, setOpenModal] = React.useState(false)

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
        <TodoContext.Provider value={{
            setSearchValue,
            searchValue,
            setOpenModal,
            openModal,
            totalTodos,
            searchedTodos,
            completedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }