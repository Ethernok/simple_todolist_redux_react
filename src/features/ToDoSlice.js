// Para entender que es un Slice: https://redux-toolkit.js.org/api/createSlice
import { createSlice } from '@reduxjs/toolkit'

// El estado inicial del Slice
const initialState = {
    toDoList: []
}
// Es una funcion que acepta el nombre de esta internamente, un estado inicial, y unos reducers para alterar el estado al deseado, se pueden crear todos los reducers que se quieran
const toDoSlice = createSlice({
    name: 'toDos',
    initialState,
    reducers: {
        saveToDo: (state, action) => {
            // el state lo consigue del estado inicial, y este a su vez tiene un elemento que se llama "toDoList: []", por eso mismo se accede de esta manera
            // Al hacerle un push(action.payload) se le añade al estado el "payload" del parámetro que se le pasa a la funcion, con lo cual se agrega esa información al array "toDoList"
            state.toDoList.push(action.payload)
        },
        // Cuando se usa una funcion con (state, action), se toma por parámetro
        setCheck: (state, action) => {
            state.toDoList.map(item => { 
                // Como en el parámetro de la funcion setCheck siempre se le pasa una id, el "action.payload" va a ser una id, si devolviera un objeto con una id dentro, tendríamos que comparar con "action.payload.id"
                if(action.payload === item.id){
                    
                    if(item.done === true) {
                        // Creo que se podría tambien cambiar con "!item.done"
                        item.done = false
                    } else{
                        item.done = true
                    }
                }
                
            })
        }
    }
});

// Se exporta los reducers de esta manera
export const { saveToDo, setCheck } = toDoSlice.actions

// Se exporta una funcion que se crea en esta misma linea que recibe por parámetro el state y devuelve el estado inicial toDoList, haciendo referencia al nombre del slice "name:'toDos'"
export const selectToDoList = state => state.toDos.toDoList

// Necesario para exportar el Slice
export default toDoSlice.reducer
