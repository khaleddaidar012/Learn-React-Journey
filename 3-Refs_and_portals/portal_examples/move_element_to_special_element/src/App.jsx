import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createPortal } from 'react-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    createPortal( <h3 style={{ color: "green" }}>ده اتعرض داخل div مخصص!</h3>,document.getElementById("special-root"))
  )
}

export default App
