import { useState , useReducer} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function reducer(state,action) {
    if(action.type === "toggle") return !state;
    return state;


  }
  const [on,dispatch] = useReducer(reducer,false)

  return (
    <>
    <h2>{on ? "On" : "OFF"}</h2>
    <button onClick={() => dispatch({type:"toggle"})}>Toggle</button>

    </>
  )
}

export default App
