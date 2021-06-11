import React from 'react'
import './ToDoItem.css'
import Checkbox from '@material-ui/core/Checkbox'

// Use dispatch se usa para cambiar el estado de la aplicacion, una forma combinada de UseEffect React y dispatch de Redux
import { useDispatch } from 'react-redux'

import { setCheck } from '../features/ToDoSlice'

// Esto es un componente a los que le pasamos las props que nos llegan desde la declaración del componente en la App principal
const ToDoItem = ({ name, done, id}) => {
     // Creamos la constante con la que se utilizará useDispatch() que se usará para llamar a un reducer o a un accion que activará un reducer que se usará para modificar el estado
    const dispatch = useDispatch()


    const handleCheck = (ev) => {
        // Aquí usamos dispatch con el reducer setCheck y le pasamos por parámetro la id a la que chequeamos
        dispatch(setCheck(id))
        // Le agregamos la clase que tacha el elemento checkeado
        ev.target.closest('.toDoItem').classList.toggle('toDoItem--done')
    }
    // Siempre hay que poner un return en un componente que es lo que se rederizará en la vista
    return (
        <div className="toDoItem">
           
            <Checkbox
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <p> {name}</p>
        </div>
    )
}

export default ToDoItem
