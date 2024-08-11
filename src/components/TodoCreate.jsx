import React, { useState } from 'react'
import '../App.css';
import '../css/TodoCreate.css';

function TodoCreate({onCreateTodo}) {
  const [newTodo,setNewTodo]=useState('');

  const clearInput=()=>{
    setNewTodo('');
  }

  const createTodo=()=>{
    if(!newTodo) return;

    const request ={
      id:Math.floor(Math.random()*599),
      content:newTodo
    }
    onCreateTodo(request);
    clearInput();

  }

  return (
    <div className='todoCreate'>
        <input 
        value={newTodo}
        onChange={(e)=>setNewTodo(e.target.value)}
        type="text" placeholder='Todo giriniz' className='todoInput'/>
        <button 
        onClick={createTodo}
        className='todoButton'>Todo Oluştur</button>
    </div>
  )
}

export default TodoCreate