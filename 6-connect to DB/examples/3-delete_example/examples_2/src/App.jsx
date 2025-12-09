import { useState } from 'react'
import './App.css'

function App() {
const [name,Setname] = useState(""); // ال هنبعت عليه
const [out,setout] = useState([]); // ال هنستقبل عليه 
async function sendData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users" , {
    method:"POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({name}),
  });
const data = await res.json();
setout(prev => [...prev , data])
}

  return (
    <div>
      <input type="text" name="" id=""  onChange={(e) => Setname(e.target.value)}/>
      <button onClick={sendData}>Send</button>
            <ul>
        {out.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
