import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [login, setlogin] = useState({username:"" , password:""})
  function update(key,value){
setlogin((prev) => ({...prev,[key]:value}))
  }
  return (
    <>
  <input placeholder='username' type="text" name="" id="" onChange={(e) => update("username" , e.target.value)} />
  <input placeholder='password' type="password" name="" id="" onChange={(e) => update("password" , e.target.value)} />
<pre>{JSON.stringify(login,null,2)}</pre>
    </>
  )
}

export default App
