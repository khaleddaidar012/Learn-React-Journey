import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [amount,setAmount] = useState(1);
  const [rate,setrate] = useState(30);
  const [result,setresult] = useState(0);
useEffect(() =>{
  setresult(amount * rate)
},[amount,rate])
  return (
    <>
    <input onChange={e => setAmount(e.target.value)} placeholder="amount" />;
    <div>{amount} = dolar { result} pound</div>
 
    
     </>
  )
}

export default App
