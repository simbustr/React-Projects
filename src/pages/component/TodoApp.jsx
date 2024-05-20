import React, { useState,useEffect } from "react";
import axios from 'axios';
import TodoList from "./TodoList"

const TodoApp = () => {

  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);

 

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://node-user-curd.vercel.app/api/todos');
      setTodos(response.data);
      console.log(response,"kkkkkkkkkkk")
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);


  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };


  const editTodo = async (id, updatedTodo) => {
    try {
      const response = await axios.put(`https://node-user-curd.vercel.app/api/todos/${id}`, updatedTodo);
      setTodos(todos.map(todo => (todo._id === id ? response.data : todo)));
      setEditingTodo(null);
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };

  const addTodo = async () => {
    try {
      const response = await axios.post('https://node-user-curd.vercel.app/api/todos', {
        title: newTitle,
        description: newDescription,
      });
      setTodos([...todos, response.data]);
      setNewTitle('');
      setNewDescription('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };



  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTitle !== '' && newDescription !== '') {
      addTodo();
    }
  };

  const handleEdit = (id) => {
    const todo = todos.find(todo => todo._id === id);
    setEditingTodo(todo);
    setNewTitle(todo.title);
    setNewDescription(todo.description);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (editingTodo) {
      editTodo(editingTodo._id, { title: newTitle, description: newDescription });
      setNewTitle('');
      setNewDescription('');
    }
  };


  return (
    <div className="input-main">
      <form  onSubmit={editingTodo ? handleSaveEdit : handleAddTodo}>
        <div className="input-wrp">
          <div>
          <input
          type="text"
          value={newTitle}
          onChange={handleTitleChange}
          placeholder="Add a new title"
          className="p-2 border rounded mr-2"
        />
      
          </div>
          <div>
          <input
          type="text"
          value={newDescription}
          onChange={handleDescriptionChange}
          placeholder="Add a new description"
          className="p-2 border rounded mr-2"
        />
          </div>
          <div>
           

            <button type="submit" className="task_submit">
          {editingTodo ? 'Save' : 'Add'}
        </button>
          </div>
        </div>
      </form>


      <TodoList todos={todos} setTodos={setTodos} onEdit={handleEdit}/>
    </div>
  );
};

export default TodoApp;
