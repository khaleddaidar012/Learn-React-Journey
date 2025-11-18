import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCounter } from './CouneterProvider'


function App() {
  const { count, incr, decr } = useCounter();
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Count: {count}</h1>
      <button onClick={incr}>+</button>
      <button onClick={decr} style={{ marginLeft: "10px" }}>
        -
      </button>
    </div>
  );
};

export default App
