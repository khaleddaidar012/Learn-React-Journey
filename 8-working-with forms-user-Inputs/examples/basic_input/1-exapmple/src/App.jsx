import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, SetName] = useState('');
  function handleSubmit(e){
  e.preventDefault();
  alert(`Nmae :${name}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Example_1</h1>
        <input value={name} onChange={(e) => SetName(e.target.value)} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
