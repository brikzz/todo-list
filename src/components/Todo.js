//renders a todo object and handles its objects
import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {

    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return (
        <div style = {{ display: "flex" }}>
            <input type = "checkbox" onClick = { handleCheckboxClick } />
            <li style = {{
                color: "white",
                textDecoration: todo.completed ? "line-through" : null
            }}>
                { todo.task }
            </li>
            <button 
            style={{
                backgroundColor: 'red',
                color: 'white',
                padding: '0px 8px',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
            }}
             onClick = { handleRemoveClick } >
                    X
            </button>
        </div>
    );
}

export default Todo;