import { useState } from "react";

/* =========================
   useInput Hook (Professional)
   supports: text, email, number, checkbox
========================= */

function useInput({ initialValue = "", validate }) {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);

  const isValid = validate ? validate(value) : true;
  const hasError = touched && !isValid;

  function onChange(e) {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValue(val);
  }

  function onBlur() {
    setTouched(true);
  }

  function reset() {
    setValue(initialValue);
    setTouched(false);
  }

  return {
    value,
    onChange,
    onBlur,
    hasError,
    isValid,
    reset
  };
}

/* =========================
   Examples Using useInput Hook
========================= */

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>useInput Hook – 10 Examples</h1>
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
      <Example5 />
      <Example6 />
      <Example7 />
      <Example8 />
      <Example9 />
      <Example10 />
    </div>
  );
}

/* =========================
   1️⃣ Required Text
========================= */
function Example1() {
  const name = useInput({ validate: v => v.trim() !== "" });

  return (
    <div>
      <h4>1. Required Text</h4>
      <input {...name} placeholder="Name" />
      {name.hasError && <p style={{ color: "red" }}>Required</p>}
    </div>
  );
}

/* =========================
   2️⃣ Email Validation
========================= */
function Example2() {
  const email = useInput({ validate: v => v.includes("@") });

  return (
    <div>
      <h4>2. Email</h4>
      <input type="email" {...email} placeholder="Email" />
      {email.hasError && <p style={{ color: "red" }}>Invalid email</p>}
    </div>
  );
}

/* =========================
   3️⃣ Min Length Password
========================= */
function Example3() {
  const password = useInput({ validate: v => v.length >= 6 });

  return (
    <div>
      <h4>3. Password</h4>
      <input type="password" {...password} />
      {password.hasError && <p style={{ color: "red" }}>Min 6 chars</p>}
    </div>
  );
}

/* =========================
   4️⃣ Number > 18
========================= */
function Example4() {
  const age = useInput({ validate: v => Number(v) >= 18 });

  return (
    <div>
      <h4>4. Age</h4>
      <input type="number" {...age} />
      {age.hasError && <p style={{ color: "red" }}>Must be 18+</p>}
    </div>
  );
}

/* =========================
   5️⃣ Checkbox Required
========================= */
function Example5() {
  const agree = useInput({ initialValue: false, validate: v => v === true });

  return (
    <div>
      <h4>5. Checkbox</h4>
      <label>
        <input type="checkbox" checked={agree.value} onChange={agree.onChange} onBlur={agree.onBlur} /> Agree
      </label>
      {agree.hasError && <p style={{ color: "red" }}>Required</p>}
    </div>
  );
}

/* =========================
   6️⃣ Username (no spaces)
========================= */
function Example6() {
  const username = useInput({ validate: v => !v.includes(" ") });

  return (
    <div>
      <h4>6. Username</h4>
      <input {...username} />
      {username.hasError && <p style={{ color: "red" }}>No spaces</p>}
    </div>
  );
}

/* =========================
   7️⃣ Phone Number Length
========================= */
function Example7() {
  const phone = useInput({ validate: v => v.length === 11 });

  return (
    <div>
      <h4>7. Phone</h4>
      <input {...phone} />
      {phone.hasError && <p style={{ color: "red" }}>11 digits</p>}
    </div>
  );
}

/* =========================
   8️⃣ Confirm Password
========================= */
function Example8() {
  const pass = useInput({ validate: v => v.length >= 6 });
  const confirm = useInput({ validate: v => v === pass.value });

  return (
    <div>
      <h4>8. Confirm Password</h4>
      <input type="password" {...pass} placeholder="Password" />
      <input type="password" {...confirm} placeholder="Confirm" />
      {confirm.hasError && <p style={{ color: "red" }}>Not matching</p>}
    </div>
  );
}

/* =========================
   9️⃣ Custom Regex
========================= */
function Example9() {
  const code = useInput({ validate: v => /^[A-Z]{3}$/.test(v) });

  return (
    <div>
      <h4>9. Regex (AAA)</h4>
      <input {...code} />
      {code.hasError && <p style={{ color: "red" }}>3 capital letters</p>}
    </div>
  );
}

/* =========================
   🔟 Full Form Submit
========================= */
function Example10() {
  const email = useInput({ validate: v => v.includes("@") });
  const age = useInput({ validate: v => Number(v) >= 18 });

  function submit(e) {
    e.preventDefault();
    if (!email.isValid || !age.isValid) return alert("Invalid form");
    alert("Form Submitted ✔️");
    email.reset();
    age.reset();
  }

  return (
    <form onSubmit={submit}>
      <h4>10. Submit Form</h4>
      <input placeholder="Email" {...email} />
      <input type="number" placeholder="Age" {...age} />
      <button>Submit</button>
    </form>
  );
}
