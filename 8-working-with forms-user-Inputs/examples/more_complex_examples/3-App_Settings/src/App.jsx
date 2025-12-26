import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [settings, setsettings] = useState({theme: "light" , lang:"ar"});
  function update(key,value){
    setsettings((prev) =>({...prev , [key]: value}));
    

  }

  return (
    <>

<select name="" id="" onChange={(e) => update("theme" , e.target.value)}>

  <option value="light">Light</option>
  <option value="dark">Dark</option>
</select>

<select name="" id="" onChange={(e) => update("lang" , e.target.value)}>

  <option value="ar">ar</option>
  <option value="en">en</option>
</select>
<pre>{JSON.stringify(settings,null,2)}</pre>
    </>
  )
}

export default App
