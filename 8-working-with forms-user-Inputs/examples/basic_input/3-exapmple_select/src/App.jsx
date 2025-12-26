import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [role, setrole] = useState("");
  function handlesubmit(e){
    e.preventDefault();
    
  if (!role) {
    alert("Please select a role");
    return;
  }
    alert(role);
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
      <h4>Example 4</h4>
      <select value={role} onChange={(e) => setrole(e.target.value)}>
        <option value="user">user</option>
        <option value="admin">admin</option>
      </select>
      <button>Submit</button>
      </form>
    </>
  )
}

export default App
