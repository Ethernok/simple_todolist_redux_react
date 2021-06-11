import React, { useState }  from 'react'
import './Input.css'
// Use dispatch se usa para cambiar el estado de la aplicacion, una forma combinada de UseEffect React y dispatch de Redux
import { useDispatch } from 'react-redux'
import { saveToDo } from '../features/ToDoSlice'

const Input = () => {
    // Inicializamos el valor del input con useState
    const [input, setInput] = useState('')
    // Creamos la constante con la que se utilizará useDispatch() que se usará para llamar a un reducer o a un accion que activará un reducer que se usará para modificar el estado
    // https://react-redux.js.org/api/hooks#usedispatch
    const dispatch = useDispatch()
    // funcion anonima que se utilizará cada vez que se le de click al botón de "Add"
    const addToDo = () => {
        if(input === ''){
            alert('You must write something!')
        }else{
            dispatch(saveToDo({
                item: input,
                done: false,
                id: Date.now()
            }))
            setInput('')
        }
        // Aquí usamos dispatch con el reducer saveToDo y le pasamos por parámetro un objeto con la información de la nota que hemos creado
        
    }
    
    return (
        <div className="input">
            <input id="inputType" type="text" value={input} onChange={ev => setInput(ev.target.value)} placeholder="Type here..." />
            <button onClick={addToDo}>Add!</button>
        </div>
    )
}

export default Input