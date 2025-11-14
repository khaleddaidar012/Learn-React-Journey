import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [_,setRender] = useState(false);
  const counter = useRef(0);
  const add = () =>{
    counter.current += 1;
    alert("القيمة الحالية: " + counter.current);
  }
  return (
    <div>
      <button onClick={add} >زياده</button>
      <p>مش هيعمل rerender!</p>
    </div>
  );
}

export default App
