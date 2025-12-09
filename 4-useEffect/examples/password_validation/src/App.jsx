import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setpassword] = useState(0)
  const [isvalid, setisvalid] = useState(false)

    useEffect(() =>{
      setisvalid(password.length >= 8)
    },[password])

  return (
    <>
    <input type="password" onChange={e => setPassword(e.target.value)} />
      {isvalid ? <span style={{color:'green'}}>قوية</span> : <span style={{color:'red'}}>ضعيفة</span>}
     </>
  )
}

export default App
