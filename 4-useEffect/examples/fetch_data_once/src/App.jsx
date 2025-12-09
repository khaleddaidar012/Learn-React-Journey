import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setuser] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users').then(res =>res.json()).then(data => setuser(data))
  },[] ) // اي نفذه مرة واحده

  return (
    <>
    <div> num of user :- {user.length}</div>
    <div>  users are :- {user.map((u) =>(

      <p key={u.id}>{u.name}</p>
    ))}</div>
    </>
  )
}

export default App
