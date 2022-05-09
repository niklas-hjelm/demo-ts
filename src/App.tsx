import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTask from './TodoTask';

function App() {
  return (
    <div className="App">
     <div className='header'>
       <div className='inputContainer'>
         <input type="text" placeholder="Task...." name="task"></input>
         <input type="number" placeholder="Deadline in (days left)..." name="task"></input>
       </div>
       <button>Add Task</button>
     </div>
     <div className='todoList'>
       Add tasks here
     </div>
    </div>
  );
}

export default App;
