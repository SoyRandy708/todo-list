import React from "react"
import { TodoContext } from "../../context"

export function Mensaje() {
    const {
        setMensaje,
        mensaje,
        mensajeTexto,
    } = React.useContext(TodoContext)

    setTimeout(() => {
        setMensaje(false)
    }, 3000)

    return (
        <div className={`mensaje ${mensaje ? "mostrar" : ""}`}>
            <p> {mensajeTexto} </p>
        </div>
    )
}