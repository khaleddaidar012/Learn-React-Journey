import { useState } from 'react'
import { createPortal } from 'react-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const popup = (
      <div
      style={{
        background: "rgba(0,0,0,0.5)",
        color: "white",
        padding: "20px",
        position: "fixed",
        top: "30%",
        left: "30%",
      }}
    >Hi from Portal</div>
  )
  return (
createPortal(popup,document.body)
  )
}

export default App
