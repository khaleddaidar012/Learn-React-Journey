import { useState,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const reduce = (state,action) =>{
    switch(action.type){
      case "change": return action.payload;
      default : return state;
    }

  }
  const [tab, dispatch] = useReducer(reduce,"home")

  return (
    <>
    <button onClick={() => dispatch({type:"change" , payload:"home"})}>Home</button>
    <button onClick={() => dispatch({type:"change" , payload:"about"})}>about</button>
    <button onClick={() => dispatch({type:"change" , payload:"skills"})}>skills</button>
    <button onClick={() => dispatch({type:"change" , payload:"contact"})}>contact</button>
    <h3>current Tabs is :- {tab}</h3>
    </>
  )
}

export default App
