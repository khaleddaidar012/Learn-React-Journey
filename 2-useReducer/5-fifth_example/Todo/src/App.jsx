import { useState,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
function reducerfunc(state,action){
  switch(action.type){
    case "add" : return[...state,action.task];
    case "remove" : return state.filter((_,i) => i !== action.index);
    default :return state;
  }

}
  
  const [input, setinput] = useState("")
  const [todos, dispatch] = useReducer(reducerfunc,[])

  return (
    <>
    <h2>ToDo List</h2>
    <input type="text" name="" id="" value={input} onChange={(e) => setinput(e.target.value)} />
    <button onClick={() => {dispatch({type :"add" , task :input}); setinput("")}}>add</button>
    <ul>
      {todos.map((todo,i) =>(
        <li key={i}> {todo} <button onClick={() => dispatch({type:"remove" , index:i})}>Remove</button></li>
      ))}
    </ul>

    </>
  )
}

export default App
