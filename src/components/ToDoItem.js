import React from 'react'
import './ToDoItem.css'
import Checkbox from '@material-ui/core/Checkbox'

import { useDispatch } from 'react-redux'

import { setCheck } from '../features/ToDoSlice'


const ToDoItem = ({ name, done, id}) => {
    
    const dispatch = useDispatch()


    const handleCheck = (ev) => {
        
        dispatch(setCheck(id))
        console.log(ev.target.closest('.toDoItem').classList.toggle('toDoItem--done'))
    }
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
