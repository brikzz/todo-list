//keeps track of our todo state through a form
import { useState } from "react";
import { v4 as uuid } from "uuid";

function TodoForm({ addTodo }) {
    const[todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    //handle when user types an input for a todo to keep of in state
    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid() });
            setTodo({ ...todo, task: "" });
        }
    }

    return(
        <form onSubmit = { handleSubmit }>
            <input 
                name = "task"
                type = "text"
                value = { todo.task }
                onChange = { handleTaskInputChange } 
            />
            <button 
                style={{
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '4px 8px',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                }}
                type = "submit">
                    Submit
            </button>
        </form>
    );
}

export default TodoForm;