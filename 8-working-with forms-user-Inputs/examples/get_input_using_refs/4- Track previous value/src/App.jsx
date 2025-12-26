import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
const inputRef = useRef();
const prevValue = useRef("");


function handlebluer(){
alert(
      `Previous: ${prevValue.current} | Current: ${inputRef.current.value}`
    );
    prevValue.current = inputRef.current.value;
}

  return (
    <>
  <input type="text " ref={inputRef} onBlur={handlebluer}  placeholder='change and blue'/>

    </>
  )
}

export default App
