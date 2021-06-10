import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from '../features/ToDoSlice'
export const store = configureStore({
  reducer: {
    toDos: toDoReducer
  },
});
