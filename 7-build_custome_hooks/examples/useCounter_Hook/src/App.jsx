import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

  function useCounter(initial =0 ,step =1){

  const [count ,setCount] = useState(initial);
  const inc = () => setCount((c) => c + step);
  const dec = () => setCount((c) => c - step);
  const reset = () => setCount(initial);

  return{count , inc , dec , reset}
  }




function App() {
  const {count , inc, dec,reset} = useCounter(5, 2);

  return (
    <>
      <h3>useCounter Example</h3>
      <p>Count: {count}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>Reset</button>
    
    </>
  )
}

export default App
