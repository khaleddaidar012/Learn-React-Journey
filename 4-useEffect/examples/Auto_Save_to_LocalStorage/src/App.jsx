import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setname] = useState(0)


    useEffect(() =>{
      localStorage.setItem("the name" , name);
      console.log("local storage updated")
     
    },[name])

  return (
    <>
    <input type="text" onChange={e => setname(e.target.value)} />
    
     </>
  )
}

export default App
