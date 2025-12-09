import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [timer, settimer] = useState(60);




    useEffect(() =>{
       if(timer === 0) return;
       const intervalid = setInterval(() =>{
        settimer(t => t-1);
       },1000);
       return () => clearInterval(intervalid)
     
     
    },[timer])

  return (
    <>
    <h2>remaiing time is {timer}</h2>
    
     </>
  )
}

export default App
