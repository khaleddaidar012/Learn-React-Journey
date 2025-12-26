import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [error, seterror] = useState("");
  function handleEmail(value){
return /\S+@\S+\.\S+/.test(value);
  }

  return (
    <>
  <input type="text" placeholder='email' onBlur={(e) => seterror(handleEmail(e.target.value) ? "":"Invalid email ")} />
  <span>{error}</span>
    </>
  )
}

export default App
