import './App.css';
import React from "react";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const[todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
        <div>
          <TodoForm addTodo = { addTodo } />
        </div>
        <TodoList 
          todos = { todos } 
          toggleComplete = { toggleComplete }
          removeTodo = { removeTodo } 
        />
      </header>
    </div>
  );
}

export default App;
