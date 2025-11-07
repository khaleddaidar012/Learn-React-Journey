import { useState ,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const reducer =(state,action) =>{
    switch(action.type){
      case 'increment' : return state +1;
      case 'decrement' : return state -1;
      case 'reset' : return 0;
      default: state;
    }
  }
  
const [count ,dispatch] = useReducer(reducer,0)
  return (
    <>
  <h2>Count is :{count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    <button onClick={() => dispatch({type :"decrement"})}>-</button>
    <button onClick={() => dispatch({type :"reset"})}>reset</button>
  
    </>

  )
}

export default App
