import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [category, setcategory] = useState("sport");
  const [data ,setData] = useState(null);



    useEffect(() =>{
        console.log(`جاري جلب أخبار قسم: ${category}...`);
     
     
    },[category])

  return (
    <>
    <select name="" id="" onChange={e => setcategory(e.target.value)}>
      <option value="sports"> sports</option>
      <option value="tech"> tech</option>
    </select>
    
     </>
  )
}

export default App
