import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
const inputeref = useRef();

function clearinput(){

  inputeref.current.value = "";
}

  return (
    <>
  <input type="text " ref={inputeref} placeholder='click button to clear' />
  <button onClick={clearinput}>clear</button>
    </>
  )
}

export default App
