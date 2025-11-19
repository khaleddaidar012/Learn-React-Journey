import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { forwardRef } from 'react'
import { useImperativeHandle } from 'react'
import { useRef } from 'react'

const Form = forwardRef((props,ref) =>{
  const [data,setData] = useState({name:"" , age:""});
  useImperativeHandle(ref,()=>({
    getData:()=>data,
    clearForm :() =>setData({name:"",age:""})
  }))
  return(
    <div>
      <input type="text " value={data.name} onChange={(e) => setData({...data,name:e.target.value})} />
      <input type="text " value={data.age} onChange={(e) => setData({...data,age:e.target.value})} />

    </div>
  )
})
function App() {
  const formref = useRef();
 

  return (
    <>
    <h2>Form childer</h2>
    <Form ref={formref} />
    <button onClick={() => alert(JSON.stringify(formref.current.getData()))}>Show data</button>
    <button onClick={() => alert(JSON.stringify(formref.current.clearForm()))}>Clear</button>

    </>
  )
}

export default App
