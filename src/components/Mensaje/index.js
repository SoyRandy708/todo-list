import React, { useEffect } from "react"
import { TodoContext } from "../../context"

export function Mensaje() {
    const {
        setMensaje,
        mensaje,
        setMensajeTexto,
        mensajeTexto,
    } = React.useContext(TodoContext)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMensaje(false)
            setMensajeTexto("")
        }, 3000)
    
        return () => clearTimeout(timeout);
    }, [setMensaje, setMensajeTexto, mensajeTexto])

    return (
        <div className={`mensaje ${mensaje ? "mostrar" : ""}`}>
            <p> {mensajeTexto} </p>
        </div>
    )
}