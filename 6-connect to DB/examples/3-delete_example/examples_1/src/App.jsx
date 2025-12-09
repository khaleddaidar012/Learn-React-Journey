import { useState } from 'react'
import './App.css'

function App() {
  const [status, setstatus] = useState(""); // اسم متناسق
  async function handleDelete({id}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:"DELETE"})

setstatus(res.status);    
  }

 const id = 5; // مثال

  return (
    <div className='box'>
      <h3>Delete example ({id})</h3>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <p>Status :{status}</p>
    </div>

  )
}

export default App
