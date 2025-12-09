import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState(""); // اسم متناسق
  const [resData, setResData] = useState(null);

  async function sendData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }) // لازم نفس الاسم اللي في state
      });
      const data = await res.json();
      setResData(data);
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h3>Post example 1</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={sendData}>Send</button>
      <pre>{resData && JSON.stringify(resData, null, 2)}</pre>
    </div>
  )
}

export default App
