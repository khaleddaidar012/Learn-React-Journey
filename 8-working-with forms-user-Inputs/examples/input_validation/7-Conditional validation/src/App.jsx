import { useState } from 'react'
import './App.css'

function App() {
  const [error, setError] = useState("");
  const [type, setType] = useState("email");

  function handleInputValid(value, rule) {
    switch (rule) {
      case "required":
        return value.trim() !== "";

      case "min3":
        return value.trim().length >= 3;

      case "email":
        return /\S+@\S+\.\S+/.test(value);

      case "number":
        return value.trim() !== "" && !isNaN(value);

      default:
        return true;
    }
  }

  return (
    <>
      <select
        onChange={(e) => {
          setType(e.target.value);
          setError("");
        }}
      >
        <option value="email">Email</option>
        <option value="number">Number</option>
      </select>

      <input
        type="text"
        onBlur={(e) =>
          setError(
            handleInputValid(e.target.value, type)
              ? ""
              : `Invalid ${type}`
          )
        }
      />

      {error && <span style={{ color: "red" }}>{error}</span>}
    </>
  )
}

export default App
