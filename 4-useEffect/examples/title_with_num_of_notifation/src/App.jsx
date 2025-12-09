import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setcount] = useState(0)
  useEffect(() =>{
   document.title = `you has ${count} notifiration`
  },[count])

  return (
    <>
     <button onClick={() => setcount(c => c+1)}>new message</button>
    </>
  )
}

export default App
