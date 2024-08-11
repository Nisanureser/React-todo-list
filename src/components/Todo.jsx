import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../css/Todo.css'

function Todo({todo,onRemoveTodoP2,onUpdateTodoP2}) {

  const {id ,content}=todo;
   {/* object destructing */}


   const [editable,setEditable]=useState(false);
   const [newTodo,setNewTodo]=useState(content);

   const removeTodo2=()=>{
    onRemoveTodoP2(id)
   }

   const updateTodo=()=>{
    if(newTodo.trim()===""){
      onRemoveTodoP2(id);
    }else{
      const request={
        id:id,
        content:newTodo

      }
      onUpdateTodoP2(request)
      setEditable(false)
   }
  }

  return (
    <div className='Todo'>
    <div>
        {/* {todo.content} */}
        {/* {content} */}
        {/* object destructing */}

         {
          editable ? <input value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} className='todoInput' type="text" style={{width:'380px'}}/> : content
         }
    </div>
    <div className='icons'>

        <IoIosRemoveCircle onClick={removeTodo2} />
        {
          editable ? <FaCheck  onClick={updateTodo}/>
          :  <FaEdit onClick={()=>setEditable(true)}/>
        }
      
    </div>
    </div>

  )
}

export default Todo