import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [error, seterror] = useState("");
  function handleInputValid(value,rule){
switch(rule){
  case "required":
    return value.trim() !== "";
  case "min3":
    return value.length >= 3;
  case "email":
    return /\S+@\S+\.\S+/.test(value);
}
  }

  return (
    <>
  <input type="password" placeholder='number' onBlur={(e) => {

    const v = e.target.value;
    if(!handleInputValid(v,"required")) return seterror("required")
    if(!handleInputValid(v,"min3")) return seterror("min lenth is 3")
    if(!handleInputValid(v,"email")) return seterror("invalid email");
    seterror("")
  }} />
  <span>{error}</span>
    </>
  )
}

export default App
