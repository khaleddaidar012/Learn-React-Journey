import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { forwardRef } from 'react'
import { useImperativeHandle } from 'react'
import { useRef } from 'react'

const Timer = forwardRef((props, ref) => {
    const [seconds, setseconds] = useState(0);
    // 💡 استخدم useRef لتخزين معرّف الفاصل الزمني (Timer ID)
    const timerRef = useRef(null); 

    useImperativeHandle(ref, () => ({
      start: () => {
        // إذا لم يكن هناك مؤقت يعمل بالفعل، ابدأ مؤقتًا جديدًا
        if (timerRef.current === null) {
          timerRef.current = setInterval(() => {
            setseconds((s) => s + 1);
          }, 100);
        }
      },
      stop: () => {
        // 💡 استخدام timerRef.current لإلغاء الفاصل الزمني
        clearInterval(timerRef.current);
        timerRef.current = null; // اجعلها null بعد التوقف
      },
      reset: () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setseconds(0);
      },
    }));

    return <h3>Time is {seconds}</h3>;
});


function App() {
  const timeref =useRef();

  return (
    <>
    <h2>Timer conter using UseRef&useImperativeHandle </h2>
    <Timer ref={timeref} />
    <button onClick={() => timeref.current.start()}>Start</button>
    <button onClick={() => timeref.current.stop()}>stop</button>
    <button onClick={() => timeref.current.reset()}>reset</button>
    
    </>
  )
}

export default App
