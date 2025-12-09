import { useState , useRef , useEffect, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [quantity, setquantity] = useState(0)
  const updateitemQuantity = useCallback((newQuantitiy) =>{
    if(newQuantitiy < 1) return;
    setquantity(newQuantitiy);
    console.log(`Item ${itemId} quantity updated to ${newQuantity}. Total cost: ${newQuantity * price}`);

  }, [itemId])

  useEffect(() =>{
    updateitemQuantity(5);
  },[updateitemQuantity])
  return (
    <>
    <button onClick={handleclick}>click here </button>
    </>
  )
}

export default App
