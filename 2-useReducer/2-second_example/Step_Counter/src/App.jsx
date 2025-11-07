import { useState ,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const reducer =(state,action) =>{
    switch(action.type){
      case "increment" : return state+ action.payload;
      case "decrement" : return state-action.payload;
      case "reset" : return 0;
      default: return state;
    }
  }
const [count ,dispatch] = useReducer(reducer,0)
  return (
    <>
    <h2>Step Counter :{count}</h2>
    <button onClick={() =>dispatch({type:"increment",payload:5})}>+</button>
    <button onClick={() =>dispatch({type:"decrement",payload:5})}>-</button>
    
    </>
  )
}

export default App
