import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'


function useLocaStorage(key,initalValue){
  const [value,setValue] = useState(() =>{
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initalValue;
  })
  useEffect(() =>{
    localStorage.setItem(key,JSON.stringify(value));
  },[value,key]);
  return [value,setValue];
}


function App() {
const [name,setName] = useLocaStorage("username" , "");


  return (
    <>
<h3>useLocalstorage as a hook</h3>
<input type="text" name="" id="" onChange={(e) => setName(e.target.value)} placeholder='write your name here' />
    <p>Saved name :{name}</p>
    
    </>
  )
}

export default App
