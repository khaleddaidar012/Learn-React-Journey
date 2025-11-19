import React, { useRef, useImperativeHandle, forwardRef, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Modal =forwardRef((props , ref) =>{
  const [visible, setVisible] = useState(false);
  useImperativeHandle(ref , () =>({
    open: () =>setVisible(true),
    close: () =>setVisible(false),
  }));
  if (!visible) return null;
  return(
    <div style={{border : "1px solid black "}}>
      <p>This is a Modal !</p>
      <button onClick={() => setVisible(false)}>Close</button>
    </div>
  )
})
function App() {
  const modalRef = useRef();
  return (
    <>
    <div style={{}}>
    <h3> example 3</h3>
    <button onClick={() => modalRef.current.open()}>Open Modal</button>
    <Modal ref={modalRef} />


    </div>
    </>
  )
}

export default App
