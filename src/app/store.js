// Importamos el siguiente elemento de redux toolkit, que no de redux, aunque también se podría pero importando createStore en vez de configureStore
import { configureStore } from '@reduxjs/toolkit';

// importamos el reducer de el todolist para después almacenarlo en la store, como se ve en las siguientes líneas
import toDoReducer from '../features/ToDoSlice'

export const store = configureStore({
  reducer: {
    toDos: toDoReducer
    // Si necesitas otros reducers, es decir, si por ejemplo quieres cambiar el estado de otros elementos, como la información de un usuario registrado, pEj. userInfo: userInfoReducer
  },
});
