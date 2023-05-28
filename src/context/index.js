import React from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider({ children }) {
    const [searchValue, setSearchValue] = React.useState("")
    const [categorySelected, setCategorySelected] = React.useState("TODOS");
    const [openModal, setOpenModal] = React.useState(false)
    const [openForm, setOpenForm] = React.useState(false)
    const [openView, setOpenView] = React.useState(false)
    const [todoSelected, setTodoSelected] = React.useState(null)
    const [mensaje, setMensaje] = React.useState(false)
    const [mensajeTexto, setMensajeTexto] = React.useState("")

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage("TODOS", [])

    const completedTodos = todos.filter(todo => todo.completed).length

    const totalTodos = todos.length
    
    const searchedTodos = todos.filter(todo => { 
        const todoText = todo.title.toLowerCase()
        const searchText = searchValue.toLowerCase()
        
        if(categorySelected === "COMPLETADOS" && todoText.includes(searchText)) {
            return todo.completed 
        } else if(categorySelected === "PENDIENTES" && todoText.includes(searchText)) { 
            return !todo.completed
        } else {
            return todoText.includes(searchText)
        }
    })

    const selectedTodo = (todo) => {
        setTodoSelected(todo)
    }
    
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

    const updateTodo = (todoOld, todoNew) => {
        const newTodos = [...todos]
        const index = newTodos.findIndex(todo => {
            return todo === todoOld
        })

        newTodos[index].title = todoNew.title
        newTodos[index].description = todoNew.description
        
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
            setOpenView,
            openView,
            setMensaje,
            mensaje,
            setMensajeTexto,
            mensajeTexto,
            setTodoSelected,
            todoSelected,
            setCategorySelected,
            categorySelected,
            todos,
            totalTodos,
            searchedTodos,
            completedTodos,
            selectedTodo,
            completeTodo,
            deleteTodo,
            addTodo,
            updateTodo,
            loading,
            error,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }