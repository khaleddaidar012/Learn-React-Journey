// 📘 UseReducerExamples.jsx
// أمثلة توضيحية من الأسهل للأصعب لاستخدام useReducer في React

////////////////////////////////////////
// 🟢 المثال 1: عدّاد بسيط (Basic Counter)
////////////////////////////////////////
import React, { useReducer, useState } from "react";

export function CounterBasic() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment": return state + 1;
      case "decrement": return state - 1;
      case "reset": return 0;
      default: return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}















////////////////////////////////////////
// 🟢 المثال 2: عداد بخطوات مخصصة (Step Counter)
////////////////////////////////////////
export function StepCounter() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment": return state + action.payload;
      case "decrement": return state - action.payload;
      default: return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>Step Counter: {count}</h2>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>-5</button>
    </div>
  );
}





















////////////////////////////////////////
// 🟡 المثال 3: إدارة فورم بسيط (Simple Form)
////////////////////////////////////////
export function SimpleForm() {
  const reducer = (state, action) => ({
    ...state,
    [action.field]: action.value
  });
  const [form, dispatch] = useReducer(reducer, { name: "", email: "" });

  return (
    <div>
      <input name="name" value={form.name} onChange={(e) => dispatch({ field: "name", value: e.target.value })} placeholder="Name" />
      <input name="email" value={form.email} onChange={(e) => dispatch({ field: "email", value: e.target.value })} placeholder="Email" />
      <p>{form.name} - {form.email}</p>
    </div>
  );
}











////////////////////////////////////////
// 🟡 المثال 4: تبديل الحالة (Toggle)
////////////////////////////////////////
export function ToggleExample() {
  const reducer = (state, action) => {
    if (action.type === "toggle") return !state;
    return state;
  };
  const [on, dispatch] = useReducer(reducer, false);

  return (
    <div>
      <h2>{on ? "ON" : "OFF"}</h2>
      <button onClick={() => dispatch({ type: "toggle" })}>Toggle</button>
    </div>
  );
}










////////////////////////////////////////
// 🟠 المثال 5: قائمة مهام (Todo List)
////////////////////////////////////////
export function TodoList() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add": return [...state, action.task];
      case "remove": return state.filter((_, i) => i !== action.index);
      default: return state;
    }
  };
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>Todo List</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => { dispatch({ type: "add", task: input }); setInput(""); }}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo} <button onClick={() => dispatch({ type: "remove", index: i })}>X</button></li>
        ))}
      </ul>
    </div>
  );
}














////////////////////////////////////////
// 🔵 المثال 6: إدارة Loading / Error / Data
////////////////////////////////////////
export function DataFetch() {
  const initialState = { loading: false, data: null, error: null };

  const reducer = (state, action) => {
    switch (action.type) {
      case "loading": return { ...state, loading: true, error: null };
      case "success": return { loading: false, data: action.payload, error: null };
      case "error": return { loading: false, data: null, error: action.payload };
      default: return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "loading" });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();
      dispatch({ type: "success", payload: data });
    } catch (err) {
      dispatch({ type: "error", payload: err.message });
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {state.loading && <p>Loading...</p>}
      {state.data && <pre>{JSON.stringify(state.data, null, 2)}</pre>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}





















////////////////////////////////////////
// 🟣 المثال 7: سلة مشتريات (Shopping Cart)
////////////////////////////////////////
export function ShoppingCart() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add": return [...state, action.item];
      case "remove": return state.filter((_, i) => i !== action.index);
      case "clear": return [];
      default: return state;
    }
  };
  const [cart, dispatch] = useReducer(reducer, []);

  return (
    <div>
      <button onClick={() => dispatch({ type: "add", item: "Apple" })}>Add Apple</button>
      <button onClick={() => dispatch({ type: "add", item: "Banana" })}>Add Banana</button>
      <button onClick={() => dispatch({ type: "clear" })}>Clear</button>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>{item} <button onClick={() => dispatch({ type: "remove", index: i })}>X</button></li>
        ))}
      </ul>
    </div>
  );
}
















////////////////////////////////////////
// 🔴 المثال 8: إدارة Theme (Dark / Light)
////////////////////////////////////////
export function ThemeSwitcher() {
  const reducer = (state, action) => {
    if (action.type === "toggle") return state === "light" ? "dark" : "light";
    return state;
  };
  const [theme, dispatch] = useReducer(reducer, "light");

  return (
    <div style={{
      background: theme === "light" ? "#fff" : "#222",
      color: theme === "light" ? "#000" : "#fff",
      padding: "50px",
      textAlign: "center"
    }}>
      <h2>Theme: {theme}</h2>
      <button onClick={() => dispatch({ type: "toggle" })}>Toggle Theme</button>
    </div>
  );
}












////////////////////////////////////////
// 🔴 المثال 9: إدارة Tabs داخل واجهة (Tabs)
////////////////////////////////////////
export function TabsExample() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "change": return action.payload;
      default: return state;
    }
  };
  const [tab, dispatch] = useReducer(reducer, "home");

  return (
    <div>
      <button onClick={() => dispatch({ type: "change", payload: "home" })}>Home</button>
      <button onClick={() => dispatch({ type: "change", payload: "about" })}>About</button>
      <button onClick={() => dispatch({ type: "change", payload: "contact" })}>Contact</button>
      <h3>Current Tab: {tab}</h3>
    </div>
  );
}




















////////////////////////////////////////
// 🧠 المثال 10: إدارة Multi-State مع Actions كثيرة
////////////////////////////////////////
export function ComplexReducer() {
  const initialState = { count: 0, theme: "light", name: "" };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment": return { ...state, count: state.count + 1 };
      case "decrement": return { ...state, count: state.count - 1 };
      case "toggleTheme": return { ...state, theme: state.theme === "light" ? "dark" : "light" };
      case "setName": return { ...state, name: action.payload };
      default: return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{
      background: state.theme === "light" ? "#fff" : "#222",
      color: state.theme === "light" ? "#000" : "#fff",
      padding: "30px"
    }}>
      <h2>{state.name || "Guest"}</h2>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "toggleTheme" })}>Toggle Theme</button>
      <input placeholder="Set name" onChange={(e) => dispatch({ type: "setName", payload: e.target.value })} />
    </div>
  );
}
