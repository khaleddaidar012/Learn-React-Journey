import { useState , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const changeColorRef = useRef();
  const ChangeColorFunc = () =>{
    changeColorRef.current.style.background = "blue";

  }

    return (
    <div>
      <div
      ref={changeColorRef}
        
        style={{ width: 100, height: 100, background: "gray", margin: 10 }}
      ></div>
      <button onClick={ChangeColorFunc}>غير اللون</button>
    </div>
  );
}

export default App
