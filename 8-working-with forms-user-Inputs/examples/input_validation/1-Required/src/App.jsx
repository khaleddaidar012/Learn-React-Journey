import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [error, seterror] = useState("");
  function handleInputValid(value){
return value.trim() !== "";
  }

  return (
    <>
    <input type="text" onBlur={(e) => seterror(handleInputValid(e.target.value) ? "" :"field is required")} />
    <span>{error}</span>
    </>
  )
}

export default App
