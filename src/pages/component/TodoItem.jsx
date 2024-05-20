import React from 'react'

const TodoItem = ({todo, onDelete,onEdit}) => {
  return (
    <div className='card-cont'>
       <div><h1>{todo.title}</h1></div> 
       <div><p>{todo.description}</p></div>
       
       <div className='btn-wrp'>
       <button className='task_edit' onClick={()=>onEdit(todo._id)}>Edit</button>
       <button className='task_delete' onClick={()=>onDelete(todo._id)}>Delete</button>
       </div>
    </div>
  )
}

export default TodoItem
