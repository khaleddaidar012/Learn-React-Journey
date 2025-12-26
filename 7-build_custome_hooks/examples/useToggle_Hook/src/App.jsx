import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'


function useToggle(initial = false){
  const [value,setvalue] = useState(initial);
  const toggle = () =>setvalue((prev) =>!prev);
  return [value,toggle];
}


function App() {
const [on,toggle] = useToggle();



  return (
    <>
<h3>UseToggle example</h3>
<p>Status :{on ?"On" :"Off"}</p>
<button onClick={toggle}>Toggle</button>
    
    </>
  )
}

export default App
