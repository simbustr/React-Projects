import React from 'react'
import axios from 'axios';
import TodoItem from "./TodoItem"

const TodoList = ({ todos, setTodos }) => {


    const handleDelete = async (id) => {
        try {
          await axios.delete(`https://node-user-curd.vercel.app/api/todos/${id}`);
          setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
          console.error('Error deleting todo:', error);
        }
      };

  return (
    <div>
       {todos.map((todo,index) => ( 
       <div key={index}>
       <TodoItem todo={todo} onDelete={handleDelete}/>
       </div>
       ))}
    </div>
  )
}

export default TodoList
