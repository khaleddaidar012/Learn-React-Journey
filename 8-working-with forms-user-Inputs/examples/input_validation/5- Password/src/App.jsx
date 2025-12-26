import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [error, seterror] = useState("");
  function handlenumber(value){
return value.length >= 6;
  }

  return (
    <>
  <input type="password" placeholder='number' onBlur={(e) => seterror(handlenumber(e.target.value) ? "":"not full password")} />
  <span>{error}</span>
    </>
  )
}

export default App
