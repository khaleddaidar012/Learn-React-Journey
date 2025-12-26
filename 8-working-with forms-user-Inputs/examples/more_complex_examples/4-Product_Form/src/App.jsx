import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [product, setproduct] = useState({tittle:"",price:"",stock:""});
function update(key,value){
setproduct((prev) => ({...prev,[key] :value}));
}
  return (
    <>
<input type="text" name="" id="" placeholder='titlle' onChange={(e) => update("title" ,e.target.value)} />
<input type="price" name="" id="" placeholder='price' onChange={(e) => update("price" ,e.target.value)} />
<input type="stock" name="" id="" placeholder='stock' onChange={(e) => update("stock" ,e.target.value)} />
<pre>{JSON.stringify(product,null,2)}</pre>
    </>
  )
}

export default App
