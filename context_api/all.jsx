// =======================================================
// 🟢 مشروع 1: Theme Context (Light/Dark Mode)
// =======================================================
import React, { createContext, useState, useContext } from "react";

// ---------- Context ----------
const ThemeContext = createContext();

// ---------- Provider ----------
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ---------- Hook ----------
export const useTheme = () => useContext(ThemeContext);

// ---------- Component ----------
export const ThemeApp = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.3s",
      }}
    >
      <h1>Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme 🌗</button>
    </div>
  );
};



// =======================================================
// 🟡 مشروع 2: User Context (Login Info)
// =======================================================











// ---------- Context ----------
const UserContext = createContext();

// ---------- Provider ----------
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Guest", loggedIn: false });
  const login = (name) => setUser({ name, loggedIn: true });
  const logout = () => setUser({ name: "Guest", loggedIn: false });

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};





















// ---------- Hook ----------
export const useUser = () => useContext(UserContext);

// ---------- Component ----------
export const UserApp = () => {
  const { user, login, logout } = useUser();
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Welcome, {user.name}</h2>
      {user.loggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login("Khaled")}>Login</button>
      )}
    </div>
  );
};



// =======================================================
// 🔵 مشروع 3: Language Context (Multi-language)
// =======================================================

// ---------- Context ----------
const LangContext = createContext();

// ---------- Provider ----------
export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));
  const text = lang === "en" ? "Hello World" : "مرحبا بالعالم";

  return (
    <LangContext.Provider value={{ lang, toggleLang, text }}>
      {children}
    </LangContext.Provider>
  );
};

// ---------- Hook ----------
export const useLang = () => useContext(LangContext);

// ---------- Component ----------
export const LangApp = () => {
  const { lang, toggleLang, text } = useLang();
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>{text}</h2>
      <button onClick={toggleLang}>
        Switch to {lang === "en" ? "Arabic" : "English"}
      </button>
    </div>
  );
};



// =======================================================
// 🟣 مشروع 4: Counter Context (Shared Counter)
// =======================================================

// ---------- Context ----------
const CounterContext = createContext();

// ---------- Provider ----------
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

// ---------- Hook ----------
export const useCounter = () => useContext(CounterContext);

// ---------- Component ----------
export const CounterApp = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        -
      </button>
    </div>
  );
};



// =======================================================
// 🔴 مشروع 5: Todo Context (Todo List)
// =======================================================

// ---------- Context ----------
const TodoContext = createContext();

// ---------- Provider ----------
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => setTodos((prev) => [...prev, task]);
  const removeTodo = (index) =>
    setTodos((prev) => prev.filter((_, i) => i !== index));

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// ---------- Hook ----------
export const useTodo = () => useContext(TodoContext);

// ---------- Component ----------
export const TodoApp = () => {
  const { todos, addTodo, removeTodo } = useTodo();
  const [input, setInput] = useState("");

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Todo List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task..."
      />
      <button
        onClick={() => {
          if (input.trim()) {
            addTodo(input);
            setInput("");
          }
        }}
        style={{ marginLeft: "10px" }}
      >
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => removeTodo(index)} style={{ marginLeft: "10px" }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
