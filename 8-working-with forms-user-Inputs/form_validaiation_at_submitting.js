import { useState } from "react";

/* ===========================
   1️⃣ Simple Submit (no validation)
   أبسط نموذج، يعرض الاسم بعد الضغط على submit
=========================== */
export function Form1() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name submitted: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

/* ===========================
   2️⃣ Required Field
   يتحقق إذا حقل البريد الإلكتروني فارغ عند submit
=========================== */
export function Form2() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return setError("Email is required");
    alert(`Email submitted: ${email}`);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <span style={{ color: "red" }}>{error}</span>
      <button type="submit">Submit</button>
    </form>
  );
}

/* ===========================
   3️⃣ Password and Confirm Password
   يتحقق إذا الحقلين مليانين وإذا القيم متطابقة
=========================== */
export function Form3() {
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pass || !confirm) return setError("Both fields required");
    if (pass !== confirm) return setError("Passwords do not match");
    alert("Password confirmed!");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
      />
      <input
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        placeholder="Confirm Password"
      />
      <span style={{ color: "red" }}>{error}</span>
      <button type="submit">Submit</button>
    </form>
  );
}

/* ===========================
   4️⃣ Checkbox Validation
   يتحقق إذا الـ checkbox متفعل قبل submit
=========================== */
export function Form4() {
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) return setError("You must agree to terms");
    alert("Form submitted!");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        I agree to terms
      </label>
      <span style={{ color: "red" }}>{error}</span>
      <button type="submit">Submit</button>
    </form>
  );
}

/* ===========================
   5️⃣ Multiple Fields with Validation
   تحقق لكل الحقول:
   - الاسم مطلوب
   - البريد الإلكتروني مطلوب وصحيح
=========================== */
export function Form5() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = {};
    if (!form.name) errs.name = "Name required";
    if (!form.email) errs.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";

    if (Object.keys(errs).length) return setErrors(errs);

    alert(`Submitted: ${form.name}, ${form.email}`);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <span style={{ color: "red" }}>{errors.name}</span>
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <span style={{ color: "red" }}>{errors.email}</span>
      <button type="submit">Submit</button>
    </form>
  );
}
