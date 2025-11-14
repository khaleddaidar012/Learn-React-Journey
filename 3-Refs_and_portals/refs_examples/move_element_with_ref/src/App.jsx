import { useState ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const boxRef = useRef();
  const distanceRef = useRef(0);
  const box_move_right =() =>{
  distanceRef.current +=10;
    boxRef.current.style.transform = `translateX(${distanceRef.current}px)`
    boxRef.current.style.transition = "0.5s"
  }
  const box_move_left =() =>{
  distanceRef.current -=10;
    boxRef.current.style.transform = `translateX(${distanceRef.current}px)`
    boxRef.current.style.transition = "0.5s"
  }

  return (
    <div>
      <div
      ref={boxRef}
        style={{ width: 100, height: 100, background: "blue", margin: 10 }}
      ></div>
      <button onClick={box_move_left} >left</button>
      <button onClick={box_move_right} >Right</button>
      
    </div>
  );
}

export default App
