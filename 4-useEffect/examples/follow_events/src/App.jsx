import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
useEffect(() =>{

  console.log('تم تحديث المكون أو إعادة رسمه الآن!');
})
  return (
    <>
 <div>
  <button onClick={() =>setCount(c => c+1)}>increment the count :- {count}</button>
 </div>
    </>
  )
}

export default App
