import { useState,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const reduce = (state,action) =>{
  if(action.type ==="toggle") return state === "light" ?"dark":"light";
  return state;

}
  const [theme,dispatch] = useReducer(reduce,"light")
  

  return (
    <>
    <div style={{
      background:theme === "light" ? "#fff":"#222",
      color:theme === "light" ? "#111":"#fff",
      padding:"500px",
      
      textAlign:"center"
    }}>
      <h2>{theme}</h2>
      <button onClick={() => dispatch({type:"toggle"})}>Toogle Theme</button>
    </div>

    </>
  )
}

export default App
