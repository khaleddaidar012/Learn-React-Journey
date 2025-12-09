import { useState , useRef , useEffect, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const handleClick = useCallback(() =>{
    setCount(prev => prev +1)
    console.log("document clicked");
  },[])
  useEffect(() =>{
    document.addEventListener('click' , handleClick);
    return () =>{
      document.removeEventListener('click' , handleClick)
    }
  },[handleClick])

 return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>   handle click</h2>
      <p>
        **انقر في أي مكان في الصفحة** (خارج هذا المربع أو داخله) لمشاهدة العداد يزداد.
      </p>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'darkblue' }}>
        عدد النقرات: {count}
      </p>
      <p>
        (تحقق من Console لمعرفة متى يتم إضافة أو إزالة المعالج).
      </p>
    </div>
  );
}

export default App
