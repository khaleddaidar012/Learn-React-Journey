import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [agree, setAgree] = useState(false)
  function HandleSubmit(e){
    e.preventDefault();
    alert(agree ?"Agreed" : "Not Agreed");
  }
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <h4>check_box</h4>
        <label >
          <input type="checkbox" name="" id=""  onChange={(e) => setAgree(e.target.checked)}/>
          Agree
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
