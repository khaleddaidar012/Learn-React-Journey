import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function usefetch(url){
  const [data,setdata] = useState(null)
  const [loading,setloading] = useState(true)
  const [error,seterror] = useState(null)
  useEffect(() =>{
    let isMounted = true;
    async function getData() {
      try{
        setloading(true)
        const res = await fetch(url);
        if(!res.ok) throw new Error("Network error");
        const json = await res.json();
        if(isMounted) setdata(json);

      }catch(err){
        if(isMounted) seterror(err.message);

      }finally{
        if(isMounted) setloading(false);
      }
      
    }
    getData();
    return () => (isMounted = false)
  },[url]);

return{data,loading,error};
}



function App() {
  const {data,loading,error} = usefetch("https://jsonplaceholder.typicode.com/todos/1");

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error:{error}</p>

  return (
    <>
  <h3>useFetch example</h3>
  <pre>{JSON.stringify(data,null,2)}</pre>
    </>
  )
}

export default App
