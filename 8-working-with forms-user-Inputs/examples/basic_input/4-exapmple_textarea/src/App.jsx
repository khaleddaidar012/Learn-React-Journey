import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setmessage] = useState('')
function handlesubmit(e){
  e.preventDefault();
  console.log(message)
}
  return (
    <>
      <form onSubmit={handlesubmit}>
        <h1>Example_4 textarea</h1>
        <textarea name="" id="" onChange={(e) => setmessage(e.target.value)}>

        </textarea>
        <button>Send</button>
      </form>
    </>
  )
}

export default App
