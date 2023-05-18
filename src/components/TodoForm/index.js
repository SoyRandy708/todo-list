import React from "react"

export function TodoForm() {
    return (
        <form className="TodoForm">
            <label className="TodoForm__label">Escribe tu nuevo ToDo</label>

            <textarea 
                className="TodoForm__textarea" placeholder="Lavar la ropa"
            />

            <div className="TodoForm__buttonContainer">
                <button
                    className="TodoForm__button TodoForm__button--cancel"
                >Cancelar</button>

                <button
                    className="TodoForm__button TodoForm__button--add"
                >Añadir</button>
            </div>
        </form>
    )
}