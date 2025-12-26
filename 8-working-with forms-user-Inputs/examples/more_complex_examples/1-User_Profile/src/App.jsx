import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState({name:"",age:"",email:""});
  function update(key,value){
setUser((prev) => ({...prev,[key]:value}))
  }

  return (
    <>
  <input type="text" placeholder='name' onChange={(e) => update("name" ,e.target.value)} />
  <input type="text" placeholder='age' onChange={(e) => update("age" ,e.target.value)} />
  <input type="text" placeholder='email' onChange={(e) => update("email" ,e.target.value)} />
      <pre>{JSON.stringify(user,null,2)}</pre>
    </>
  )
}

export default App
