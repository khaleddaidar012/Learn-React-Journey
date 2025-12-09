import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [roomId , setRoomId] = useState("general");
 useEffect(() =>{
  console.log(`connet to room :- ${roomId}`)
 },[roomId])

  return (
    <>
  <button onClick={() => setRoomId('sports')}> connect to sport room</button>
    
     </>
  )
}

export default App
