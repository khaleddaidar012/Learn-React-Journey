import { useState  , useReducer} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const reducer =(state,action) =>({

    ...state,[action.filed]:action.value
})

  const [form, dispatch] = useReducer(reducer,{name:"",email:""})

  return (
    <>
    <input type="text" name="name" value={form.name} onChange={(e) => dispatch({filed:"name" , value:e.target.value})}  placeholder='Yout Name'/>
    <input type="text" name="email" value={form.email} onChange={(e) => dispatch({filed:"email" , value:e.target.value})} placeholder='Yout Name' />
    <p>{form.name} - {form.email}</p>
    </>
  )
}

export default App
