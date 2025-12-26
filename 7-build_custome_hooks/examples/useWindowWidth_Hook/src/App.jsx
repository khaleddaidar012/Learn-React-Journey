import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function usewindowWidth(){
  const [width,setWidth] = useState(window.innerWidth);

  useEffect(() =>{
    function handleResize(){
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize" , handleResize);
    return () => window.removeEventListener("resize",handleResize);
  },[]);
  return width;
}



function App() {
  const width = usewindowWidth();

  return (
    <>
  <h3>useWindowWidth example</h3>
  <p>current Width:{width}</p>
    
    </>
  )
}

export default App
