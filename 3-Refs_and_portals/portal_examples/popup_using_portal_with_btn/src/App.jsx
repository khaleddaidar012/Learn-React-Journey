import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createPortal } from 'react-dom'

function App() {
  const popup =(

          <div
            style={{
              background: "black",
              color: "white",
              padding: "20px",
              position: "fixed",
              top: "40%",
              left: "40%",
            }}
          >
            Popup ظاهر من Portal!
          </div>
  )
  const [show, setshow] = useState(false)

  return (
    <>
    <button onClick={() => setshow(!show)}>{show ?"Show":"Hide"}</button>
    {show && createPortal(popup,document.body)}

    </>
  )
}

export default App
