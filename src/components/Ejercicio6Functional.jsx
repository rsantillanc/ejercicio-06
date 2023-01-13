import React, { useState, useEffect } from 'react'


export const FunctionalClock = (props) => {

    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: props.name,
        apellidos: "Santillán"
    }

    const [state, updateState] = useState(initialState);


    useEffect(() => {
        console.log("useEffect: inicio");
        const interval = setInterval(() => {
            updateState({
                ...state,
                fecha: new Date(),
                edad: state.edad + 1
            })
            console.log("setInterval: inicio");
        }, 1000);

        return () => clearInterval(interval)

    }, [state])


    return (
        <div>
            <h2>
                Hora Actual: {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    )
}

