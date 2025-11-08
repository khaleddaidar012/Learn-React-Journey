import { useState,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const initialState = {loading:false,data:null,error:null};
  const reducer =(state,action)=>{
    switch (action.type){
      case "loading" : return{...state,loading :true,error:null};
      case "success" : return{loading :false,data: action.payload,error:null};
      case "error" : return{loading :false,data: null,error:action.payload};
      default :return state;
      
    }

  }
  const [state,dispatch] = useReducer(reducer,initialState)
  const fetchData = async() =>{
    dispatch({type:"loading"});
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();
      dispatch({type:"success", payload: data})
    }catch(err){
      dispatch({type:"error", payload: err.message})
    }
  }

  return (
    <>
    <button onClick={fetchData}>Fetch Data</button>
    {state.loading && <p>Loading...</p>}
    {state.data && <pre>{JSON.stringify(state.data,null,2)}</pre>}
    {state.error && <p style={{color:"red"}}>{state.error}</p>}
      
    </>
  )
}

export default App
