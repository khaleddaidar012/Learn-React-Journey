import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [val, setVal] = useState(0)
  
  useEffect(() =>{
    console.log("active element is " , document.activeElement.tagName)
  })

  return (
    <div>
      <input value={val} onChange={(e) => setVal(e.target.value)} placeholder="Input 1" />
      <button onClick={() => setVal('')}>Clear</button>
    </div>
  )
}

export default App
