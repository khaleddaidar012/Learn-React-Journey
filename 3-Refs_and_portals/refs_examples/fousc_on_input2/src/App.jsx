import { useState ,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
    const inputref = useRef();
const foucsinput = () =>{
  inputref.current.focus();
}
    return (
    <div>
      <input ref={inputref} placeholder="اكتب هنا..." />
      <button onClick={foucsinput}>Focus</button>
    </div>
  );
}

export default App
