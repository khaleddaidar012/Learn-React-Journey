import React, { useRef, useImperativeHandle, forwardRef, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Customeinput =forwardRef((props,ref) =>{
  const inputRef= useRef();
  useImperativeHandle(ref,() =>({
    focusInput : () => inputRef.current.focus(),
    clearInpur :() =>(inputRef.current.value = ""),
  }))
  return <input type="text" ref={inputRef}   placeholder="Type something..."/>
})




function App() {
  const [count, setCount] = useState(0)
  const inputRef= useRef();
  return (
    <><div>
      <h2>example_2</h2>
      <Customeinput ref={inputRef}></Customeinput>
      <button onClick={() => inputRef.current.focusInput()}>Focus</button>
      <button onClick={() => inputRef.current.clearInput()}>Clear</button>
    </div>

    </>
  )
}

export default App
