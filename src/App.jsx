import React, { useEffect } from 'react';

import { Todoprovider } from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import Todoitem from './components/Todoitem';
const App = () => {
  
   const [todos, setTodos] = React.useState(() => {
  const savedTodos = localStorage.getItem("todos");

  return savedTodos ? JSON.parse(savedTodos) : [];
});
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }
  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  const togglecompleted = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

useEffect(() => {
localStorage.setItem('todos', JSON.stringify(todos)); 

}, [todos])
  return (
    <Todoprovider value={{ todos, addTodo, updateTodo, deleteTodo, togglecompleted 

    }}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      <div className="w-full flex flex-col gap-y-3">
                                {todos.map((todo) => (
                            <Todoitem key={todo.id} todo={todo} />
                        ))}
                      </div>
                
                    </div>
                </div>
            </div>
    </Todoprovider>
  
  )
}

export default App