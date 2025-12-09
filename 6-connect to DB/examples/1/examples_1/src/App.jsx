import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState("");
  async function fetchData(){
    const res =  await fetch("https://jsonplaceholder.typicode.com/posts/1");
    setData(await res.json())
  }
  const [user, setusers] = useState([]);
  async function fetchData2(){
    const res =  await fetch("https://jsonplaceholder.typicode.com/users");
    setusers(await res.json())
  }

  return (
    <>
  <div>
    <button onClick={fetchData}>Load post 1</button>
    <pre>{data  && JSON.stringify(data)}</pre>
  </div>
  <div>
    <button onClick={fetchData2}>Load all users</button>
    <ul>
      {user.map((u) =>(
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
   



  </div>
    </>
  )
}

export default App
