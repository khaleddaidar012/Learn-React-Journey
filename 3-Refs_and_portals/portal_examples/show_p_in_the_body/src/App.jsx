import { useState } from 'react'
import { createPortal } from 'react-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

      createPortal(<p style={{color:"red"}}>Hi From Potal</p>,document.body)


    
  )
}

export default App
