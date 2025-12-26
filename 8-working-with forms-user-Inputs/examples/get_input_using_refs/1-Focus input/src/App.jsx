import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
const inputeref = useRef();

function focusinput(){

  inputeref.current.focus();
}

  return (
    <>
  <input type="text " ref={inputeref} placeholder='click button to focus' />
  <button onClick={focusinput}>Foucs</button>
    </>
  )
}

export default App
