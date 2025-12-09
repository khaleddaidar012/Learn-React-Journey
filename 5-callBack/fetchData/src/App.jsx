import { useState , useRef , useEffect, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setuser] = useState(null)
  const fetchData = useCallback(async () =>{
    console.log(`fetching user ${userId}`);
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    setuser(data)
  },[userId])
  useEffect(() =>{fetchData();},[fetchData])
  return (
    <>
    <input type="text" value={text} onChange={(e) => settext(e.target.value)} />

    </>
  )
}

export default App
