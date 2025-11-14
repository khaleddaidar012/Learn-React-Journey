import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const showValueRef = useRef();
  const showVal =() =>{
    alert("value is " + showValueRef.current.value)
  }
  return (
    <div>
      <input ref={showValueRef} placeholder="اكتب اسمك" />
      <button onClick={showVal} >عرض</button>
    </div>
  );
}

export default App
