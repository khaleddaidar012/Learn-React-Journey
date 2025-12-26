import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [error, seterror] = useState("");
  function handlenumber(value){
return !isNaN(value) && value !=="";
  }

  return (
    <>
  <input type="text" placeholder='number' onBlur={(e) => seterror(handlenumber(e.target.value) ? "":"Invalid number")} />
  <span>{error}</span>
    </>
  )
}

export default App
