import { useState } from 'react'

import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos,setTodos]=useState([]);

  const createTodo=(newTodo)=>{
    setTodos([...todos,newTodo]);
  }
  const removeTodo=(todoId)=>{
    setTodos([...todos.filter((todo)=>todo.id!==todoId)]);

  }

  const updateTodo = (updateTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== updateTodo.id) {
        return todo;
      } else {
        return updateTodo;
      }
    });
  
    setTodos([...updatedTodos]);
  };
  
 

  return (
    <div className='App'>
    <div className='todo'>
      <TodoCreate onCreateTodo={createTodo}/>
      <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo}/>
    </div>
       
    </div>
  )
}

export default App
