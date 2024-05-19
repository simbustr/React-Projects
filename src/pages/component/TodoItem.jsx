import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div className='card-cont'>
       <div>{todo.title}</div> 
       <div>{todo.description}</div>
       
       <button className='task_edit' onClick={()=>onDelete(todo._id)}>Edit</button>
       <button className='task_delete' onClick={()=>onDelete(todo._id)}>Delete</button>
    </div>
  )
}

export default TodoItem
