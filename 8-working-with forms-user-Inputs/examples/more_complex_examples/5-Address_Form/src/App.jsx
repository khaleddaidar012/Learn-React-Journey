import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [address, setaddress] = useState({country:"" ,city:"",street:""});

function update(key,value){
setaddress((prev) => ({...prev,[key]:value}))
}
  return (
    <>
<input type="text" placeholder='country' onChange={(e) =>update("country", e.target.value)} />
<input type="text" placeholder='city' onChange={(e) =>update("city", e.target.value)} />
<input type="text" placeholder='Street' onChange={(e) =>update("street", e.target.value)} />
<pre>{JSON.stringify(address,null,2)}</pre>
    </>
  )
}

export default App
