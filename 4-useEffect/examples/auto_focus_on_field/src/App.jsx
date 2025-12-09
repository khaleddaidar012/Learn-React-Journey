import { useState , useRef , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputref = useRef(null);
  useEffect(() =>{

    inputref.current.focus()
  },[])

  return (
    <>
     <input ref={inputref} type="text" />
    </>
  )
}

export default App
