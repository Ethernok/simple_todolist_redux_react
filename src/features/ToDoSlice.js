import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toDoList: []
}

const toDoSlice = createSlice({
    name: 'toDos',
    initialState,
    reducers: {
        saveToDo: (state, action) => {
            state.toDoList.push(action.payload)
        },
        setCheck: (state, action) => {
            state.toDoList.map(item => {
                if(action.payload === item.id){

                    if(item.done === true) {
                        item.done = false
                    } else{
                        item.done = true
                    }
                }
                
            })
        }
    }
});

export const { saveToDo, setCheck } = toDoSlice.actions
export const selectToDoList = state => state.toDos.toDoList
export default toDoSlice.reducer
