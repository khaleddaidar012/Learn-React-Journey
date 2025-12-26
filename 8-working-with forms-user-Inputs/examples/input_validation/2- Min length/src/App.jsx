import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [error, seterror] = useState("");
  function handleLenght(value){
return value.length >= 3;
  }

  return (
    <>
  <input type="text" placeholder='name' onBlur={(e) => seterror(handleLenght(e.target.value) ? "":"lenght must be more than 3")} />
  <span>{error}</span>
    </>
  )
}

export default App
