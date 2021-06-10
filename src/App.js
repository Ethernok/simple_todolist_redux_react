import React from 'react';
import './App.css';
import Input from './components/Input'
import ToDoItem from './components/ToDoItem';

import { useSelector } from 'react-redux'
import { selectToDoList } from './features/ToDoSlice'


function App() {

  const toDoList = useSelector(selectToDoList)

  return (
    <div className="app">
      <div className="app__container">
      
        <div className="app__toDoContainer">
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
