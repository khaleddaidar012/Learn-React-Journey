import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [theme, setTheme] = useState('defualt')
  useEffect(() =>{
    const saveTheme = localStorage.getItem('app-theme')
    if(saveTheme){
      setTheme(saveTheme)
    }
  },[])

  return (
    <>
      <p>current theme is {theme}</p>
    </>
  )
}

export default App
