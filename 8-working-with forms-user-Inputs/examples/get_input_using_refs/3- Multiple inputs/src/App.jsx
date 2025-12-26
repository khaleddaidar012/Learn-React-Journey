import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
const emailref = useRef();
const passwordref = useRef();


function handlelogin(){

console.log({
  email:emailref.current.value,
  password:passwordref.current.value,
})
}

  return (
    <>
  <input type="text " ref={emailref} placeholder='click button to show' />
  <input type="password " ref={passwordref} placeholder='click button to show' />
  <button onClick={handlelogin}>Show data</button>
    </>
  )
}

export default App
