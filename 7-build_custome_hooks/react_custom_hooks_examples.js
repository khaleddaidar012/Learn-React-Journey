// React Custom Hooks Examples in One File
// خالد هشام – أمثلة منظمة لبناء Custom Hooks + استخدام useEffect + State Management
// --------------------------------------------------------------
// يحتوي الملف على:
// 1) useFetch – جلب بيانات
// 2) useLocalStorage – إدارة state مع localStorage
// 3) useToggle – تفعيل/إلغاء
// 4) useCounter – عداد
// 5) useWindowWidth – التراكب مع window events
// --------------------------------------------------------------

import { useState, useEffect } from "react";

/* =====================================================================
   1) useFetch Hook
   ===================================================================== */
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // لحماية الـ state

    async function getData() {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network error");
        const json = await res.json();
        if (isMounted) setData(json);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    getData();
    return () => (isMounted = false);
  }, [url]);

  return { data, loading, error };
}

/* Example Component */
export function FetchExample() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>useFetch Example</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
















/* =====================================================================
   2) useLocalStorage Hook
   ===================================================================== */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

/* Example Component */
export function LocalStorageExample() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div>
      <h3>useLocalStorage Example</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="اكتب اسمك"
      />
      <p>الاسم المحفوظ: {name}</p>
    </div>
  );
}
















/* =====================================================================
   3) useToggle Hook
   ===================================================================== */
export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
}

/* Example Component */
export function ToggleExample() {
  const [on, toggle] = useToggle();

  return (
    <div>
      <h3>useToggle Example</h3>
      <p>Status: {on ? "On" : "Off"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}












/* =====================================================================
   4) useCounter Hook
   ===================================================================== */
export function useCounter(initial = 0, step = 1) {
  const [count, setCount] = useState(initial);

  const inc = () => setCount((c) => c + step);
  const dec = () => setCount((c) => c - step);
  const reset = () => setCount(initial);

  return { count, inc, dec, reset };
}

/* Example Component */
export function CounterExample() {
  const { count, inc, dec, reset } = useCounter(5, 2);

  return (
    <div>
      <h3>useCounter Example</h3>
      <p>Count: {count}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}









/* =====================================================================
   5) useWindowWidth Hook
   ===================================================================== */
export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

/* Example Component */
export function WidthExample() {
  const width = useWindowWidth();

  return (
    <div>
      <h3>useWindowWidth Example</h3>
      <p>Current Width: {width}px</p>
    </div>
  );
}




















/* =====================================================================
   Export All Examples (To Test In One App)
   ===================================================================== */
export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>React Custom Hooks – Full Examples</h1>

      <FetchExample />
      <hr />

      <LocalStorageExample />
      <hr />

      <ToggleExample />
      <hr />

      <CounterExample />
      <hr />

      <WidthExample />
    </div>
  );
}
