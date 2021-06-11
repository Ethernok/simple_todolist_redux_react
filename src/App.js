import React from 'react';
import './App.css';
import Input from './components/Input'
import ToDoItem from './components/ToDoItem';

import { useSelector } from 'react-redux'
// Importamos la funcion que hará aparecer las notas que hayamos escrito hasta el momento
import { selectToDoList } from './features/ToDoSlice'

// Este es el componente que va a envolver a los demás componentes, que a su vez se utiliza en index.js para renderizar la aplicacion
function App() {
  // Esta funcion de react-redux permite extraer data del estado de la store, usando una funcion de seleccion, es decir "selectToDoList"
  // https://react-redux.js.org/api/hooks#useselector
  const toDoList = useSelector(selectToDoList)

  return (
    <div className="app">
      <div className="app__container">
      
        <div className="app__toDoContainer">
            {/* Como conseguimos los datos de la store en la constante toDoList, se le hace un map que recorra todos los elementos, con la información que se requiera */}
            {
              
              toDoList.map(item => (
                <ToDoItem 
                name={item.item}
                done={item.done}
                id={item.id}
                 />
              ))
            }
        </div>
        <Input />
      </div>
      
    </div>
  );
}

export default App;
