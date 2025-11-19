import { useState,useRef , useImperativeHandle,forwardRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//props → الحاجات اللي الأب بيبعتهالك عادي.

//ref → السلك اللي الأب بعتُه للتحكم.
const Counter = forwardRef((props,ref) =>{
    const [count, setCount] = useState(0);
    // السماح باشياء معينه للاب
  useImperativeHandle(ref,() => ({
    reset :() =>setCount(0),
    increment : () => setCount((c) => c+1),
    getCount : () => count,
  }))

return(
  <div>
    <h3>Couner :{count}</h3>
    <button onClick={() => setCount((c) => c +1)}>+ Add</button>
  </div>
)

})
function App() {
  // السلك
  const counerRef = useRef();

  return (
    <>
  <h2>Example 1 - Basic Counter</h2>
 {/*تركيب السلك في الابن */ }
  <Counter ref={counerRef}></Counter>
  <button onClick={() => counerRef.current.reset()}>Reset</button>
    <button onClick={() => alert(counerRef.current.getCount())}>
        Show Count
      </button>
    </>
  )
}

export default App
