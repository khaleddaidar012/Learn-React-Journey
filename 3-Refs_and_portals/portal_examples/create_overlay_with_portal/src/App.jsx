import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createPortal } from 'react-dom'

function App() {
  const [open, setopen] = useState(false)
  const popup =(

          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.8)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 20,
            }}
            onClick={() => setopen(false)}
          >
            اضغط في أي مكان للقفل ✖️
          </div>
  )
  return (
    <>
  <button onClick={(() =>{setopen(true)})}>open the popup</button>
  {open && createPortal(popup,document.body)}
    </>
  )
}

export default App
