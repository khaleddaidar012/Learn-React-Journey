import { useState } from "react";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>React Forms & State Handling (Single File)</h1>

      <hr />
      <FormExamples />
      <hr />
      <ObjectStateExamples />
    </div>
  );
}

/* =========================
   5 Examples: Form & Input Handling + Submission
========================= */

function FormExamples() {
  return (
    <div>
      <h2>1️⃣ Form & Input Handling</h2>
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
      <Form5 />
    </div>
  );
}

// Example 1: Single input
function Form1() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Name: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Example 1: Single Input</h4>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}

// Example 2: Email + Password
function Form2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Example 2: Multiple Inputs</h4>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  );
}

// Example 3: Checkbox
function Form3() {
  const [agree, setAgree] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    alert(agree ? "Agreed" : "Not Agreed");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Example 3: Checkbox</h4>
      <label>
        <input type="checkbox" onChange={(e) => setAgree(e.target.checked)} />
        Agree
      </label>
      <button>Submit</button>
    </form>
  );
}













// Example 4: Select
function Form4() {
  const [role, setRole] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    alert(role);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Example 4: Select</h4>
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button>Save</button>
    </form>
  );
}










// Example 5: Textarea
function Form5() {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(message);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Example 5: Textarea</h4>
      <textarea onChange={(e) => setMessage(e.target.value)} />
      <button>Send</button>
    </form>
  );
}

/* =========================
   5 Examples: State as Object + One Main Update Function
========================= */

function ObjectStateExamples() {
  return (
    <div>
      <h2>2️⃣ Object State Handling (5 Examples)</h2>
      <UserProfile />
      <LoginForm />
      <Settings />
      <ProductForm />
      <AddressForm />
    </div>
  );
}

// Example 1: User Profile
function UserProfile() {
  const [user, setUser] = useState({ name: "", age: "", email: "" });

  function update(key, value) {
    setUser((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div>
      <h4>Example 1: User Profile</h4>
      <input placeholder="Name" onChange={(e) => update("name", e.target.value)} />
      <input placeholder="Age" onChange={(e) => update("age", e.target.value)} />
      <input placeholder="Email" onChange={(e) => update("email", e.target.value)} />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

// Example 2: Login Form
function LoginForm() {
  const [login, setLogin] = useState({ username: "", password: "" });

  function update(key, value) {
    setLogin((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div>
      <h4>Example 2: Login</h4>
      <input placeholder="Username" onChange={(e) => update("username", e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => update("password", e.target.value)} />
      <pre>{JSON.stringify(login, null, 2)}</pre>
    </div>
  );
}

// Example 3: App Settings
function Settings() {
  const [settings, setSettings] = useState({ theme: "light", lang: "ar" });

  function update(key, value) {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div>
      <h4>Example 3: Settings</h4>
      <select onChange={(e) => update("theme", e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <select onChange={(e) => update("lang", e.target.value)}>
        <option value="ar">Arabic</option>
        <option value="en">English</option>
      </select>
      <pre>{JSON.stringify(settings, null, 2)}</pre>
    </div>
  );
}

// Example 4: Product Form
function ProductForm() {
  const [product, setProduct] = useState({ title: "", price: "", stock: "" });

  function update(key, value) {
    setProduct((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div>
      <h4>Example 4: Product</h4>
      <input placeholder="Title" onChange={(e) => update("title", e.target.value)} />
      <input placeholder="Price" onChange={(e) => update("price", e.target.value)} />
      <input placeholder="Stock" onChange={(e) => update("stock", e.target.value)} />
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
}

// Example 5: Address Form
function AddressForm() {
  const [address, setAddress] = useState({ country: "", city: "", street: "" });

  function update(key, value) {
    setAddress((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div>
      <h4>Example 5: Address</h4>
      <input placeholder="Country" onChange={(e) => update("country", e.target.value)} />
      <input placeholder="City" onChange={(e) => update("city", e.target.value)} />
      <input placeholder="Street" onChange={(e) => update("street", e.target.value)} />
      <pre>{JSON.stringify(address, null, 2)}</pre>
    </div>
  );
}

  return (
    <div>
      <h2>2️⃣ Object State Handling</h2>

      <h4>Example 1: Update Name</h4>
      <input onChange={(e) => updateUser("name", e.target.value)} />

      <h4>Example 2: Update Age</h4>
      <input onChange={(e) => updateUser("age", e.target.value)} />

      <h4>Example 3: Update Email</h4>
      <input onChange={(e) => updateUser("email", e.target.value)} />

      <h4>Example 4: Update City</h4>
      <input onChange={(e) => updateUser("city", e.target.value)} />

      <h4>Example 5: Update Job</h4>
      <input onChange={(e) => updateUser("job", e.target.value)} />

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
