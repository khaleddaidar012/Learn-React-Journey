import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseTodoContext } from './Todo_context'

function App  ()  {
  const { todo, addtodo, removetodo } = UseTodoContext();
  const [input, setInput] = useState("");

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Todo List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task..."
      />
      <button
        onClick={() => {
          if (input.trim()) {
            addtodo(input);
            setInput("");
          }
        }}
        style={{ marginLeft: "10px" }}
      >
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todo.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => removetodo(index)} style={{ marginLeft: "10px" }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default App
