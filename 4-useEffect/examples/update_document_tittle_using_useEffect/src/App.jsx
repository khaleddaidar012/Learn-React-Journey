import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, settext] = useState("")
  useEffect(() =>{
    document.tittle = `...writing now${new Date().toLocaleDateString()}`
  })

  return (
    <>
      <input placeholder='...write thing' value={text} onChange={(e) => settext(e.target.value)}></input>
      <p>{text}</p>
    </>
  )
}

export default App
