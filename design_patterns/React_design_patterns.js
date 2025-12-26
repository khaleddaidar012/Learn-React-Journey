import React, { useState, useContext, createContext } from "react";

/*********************************************************
 * 1️⃣ COMPONENT COMPOSITION PATTERN
 *********************************************************/

/*
🔹 يعني إيه Component Composition؟
- بدل Component كبير ومعقّد
- بنقسّمه Components صغيرة
- ونركّبهم جوه بعض

فايدته:
- كود أنضف
- إعادة استخدام
- أسهل في الصيانة
*/

/* مثال 1:
- Component بسيط
*/
function Title() {
  return <h1>Hello React</h1>;
}

/* مثال 2:
- تركيب Component جوا Component
*/
function Header() {
  return (
    <header>
      <Title />
    </header>
  );
}

/* مثال 3:
- استخدام children
*/
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function ExampleCard() {
  return (
    <Card>
      <h2>Title</h2>
      <p>Description</p>
    </Card>
  );
}

/* مثال 4:
- إعادة استخدام نفس Component بأشكال مختلفة
*/
function Button({ children }) {
  return <button>{children}</button>;
}

/* مثال 5:
- Composition عملي (Layout)
*/
function Layout({ header, content }) {
  return (
    <>
      {header}
      {content}
    </>
  );
}



/*********************************************************
 * 2️⃣ CONTAINER / PRESENTATIONAL PATTERN
 *********************************************************/

/*
🔹 يعني إيه Container / Presentational؟
- Component للشكل بس (UI)
- Component للمنطق والـ state

فايدته:
- فصل الشكل عن المنطق
- أسهل في الاختبار
*/

/* مثال 1:
- Presentational Component
*/
function UserView({ name }) {
  return <p>User: {name}</p>;
}

/* مثال 2:
- Container Component
*/
function UserContainer() {
  const [name] = useState("Ali");
  return <UserView name={name} />;
}

/* مثال 3:
- أكتر من props
*/
function ProductView({ name, price }) {
  return <p>{name} - {price}</p>;
}

/* مثال 4:
- Container بيتعامل مع API (افتراضي)
*/
function ProductContainer() {
  const product = { name: "Book", price: 100 };
  return <ProductView {...product} />;
}

/* مثال 5:
- إعادة استخدام نفس View مع Containers مختلفة
*/



/*********************************************************
 * 3️⃣ CUSTOM HOOKS PATTERN
 *********************************************************/

/*
🔹 يعني إيه Custom Hook؟
- منطق مشترك
- نطلّعه في Hook
- نستخدمه في أكتر من Component

فايدته:
- تقليل التكرار
- كود أنضف
*/

/* مثال 1:
- Hook بسيط
*/
function useCounter() {
  const [count, setCount] = useState(0);
  return { count, inc: () => setCount(c => c + 1) };
}

/* مثال 2:
- استخدامه
*/
function CounterComponent() {
  const { count, inc } = useCounter();
  return <button onClick={inc}>{count}</button>;
}

/* مثال 3:
- Hook بقيم ابتدائية
*/
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  return [value, () => setValue(v => !v)];
}

/* مثال 4:
- Hook فيه logic أكتر
*/
function useInput(initial = "") {
  const [value, setValue] = useState(initial);
  return {
    value,
    onChange: e => setValue(e.target.value)
  };
}

/* مثال 5:
- Hook عملي جدًا (form)
*/
function Login() {
  const username = useInput("");
  return <input {...username} />;
}



/*********************************************************
 * 4️⃣ CONTROLLED COMPONENT PATTERN
 *********************************************************/

/*
🔹 يعني إيه Controlled Component؟
- React هو اللي ماسك قيمة الـ input
- مش المتصفح

فايدته:
- تحكم كامل
- Validation أسهل
*/

/* مثال 1:
- input متحكّم فيه
*/
function ControlledInput() {
  const [value, setValue] = useState("");
  return (
    <input
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}

/* مثال 2:
- عرض القيمة
*/
function ControlledWithView() {
  const [text, setText] = useState("");
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>{text}</p>
    </>
  );
}

/* مثال 3:
- Validation
*/
function EmailInput() {
  const [email, setEmail] = useState("");
  const isValid = email.includes("@");

  return (
    <>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      {!isValid && <span>Invalid Email</span>}
    </>
  );
}

/* مثال 4:
- Controlled select
*/
function RoleSelect() {
  const [role, setRole] = useState("user");
  return (
    <select value={role} onChange={e => setRole(e.target.value)}>
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
  );
}

/* مثال 5:
- Form كامل
*/
function LoginForm() {
  const [data, setData] = useState({ email: "", pass: "" });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <>
      <input name="email" value={data.email} onChange={handleChange} />
      <input name="pass" value={data.pass} onChange={handleChange} />
    </>
  );
}



/*********************************************************
 * 5️⃣ CONTEXT PATTERN
 *********************************************************/

/*
🔹 يعني إيه Context؟
- مشاركة بيانات
- بدون ما نبعث props في كل مستوى

فايدته:
- حل مشكلة prop drilling
*/

/* مثال 1:
- إنشاء Context
*/
const ThemeContext = createContext();

/* مثال 2:
- Provider
*/
function ThemeProvider({ children }) {
  const [theme] = useState("dark");
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

/* مثال 3:
- استهلاك Context
*/
function ThemeText() {
  const theme = useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}

/* مثال 4:
- Context عملي (User)
*/
const UserContext = createContext();

/* مثال 5:
- دمج Context + Components
*/
function AppProvider({ children }) {
  const user = { name: "Khaled" };
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
