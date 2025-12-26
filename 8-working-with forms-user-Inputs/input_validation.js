 import { useState } from "react";

/* helper validation function */
function handleInputValid(value, rule) {
  switch (rule) {
    case "required":
      return value.trim() !== "";
    case "min3":
      return value.length >= 3;
    case "email":
      return /\S+@\S+\.\S+/.test(value);
    case "number":
      return !isNaN(value) && value !== "";
    case "password":
      return value.length >= 6;
    default:
      return true;
  }
}

export default function ValidationExamples() {
  return (
    <div>
      <Val1 />
      <Val2 />
      <Val3 />
      <Val4 />
      <Val5 />
      <Val6 />
      <Val7 />
      <Val8 />
      <Val9 />
      <Val10 />
    </div>
  );
}

/* 1️⃣ Required */
function Val1() {
  const [error, setError] = useState("");
  return (
    <div>
      <h4>1. Required</h4>
      <input
        onBlur={(e) =>
          setError(
            handleInputValid(e.target.value, "required")
              ? ""
              : "Field is required"
          )
        }
      />
      <span>{error}</span>
    </div>
  );
}

/* 2️⃣ Min length */
function Val2() {
  const [error, setError] = useState("");
  return (
    <div>
      <h4>2. Min Length</h4>
      <input
        onBlur={(e) =>
          setError(
            handleInputValid(e.target.value, "min3")
              ? ""
              : "Minimum 3 characters"
          )
        }
      />
      <span>{error}</span>
    </div>
  );
}

/* 3️⃣ Email */
function Val3() {
  const [error, setError] = useState("");
  return (
    <div>
      <h4>3. Email</h4>
      <input
        onBlur={(e) =>
          setError(
            handleInputValid(e.target.value, "email")
              ? ""
              : "Invalid email"
          )
        }
      />
      <span>{error}</span>
    </div>
  );
}

/* 4️⃣ Numbers only */
function Val4() {
  const [error, setError] = useState("");
  return (
    <div>
      <h4>4. Number</h4>
      <input
        onBlur={(e) =>
          setError(
            handleInputValid(e.target.value, "number")
              ? ""
              : "Numbers only"
          )
        }
      />
      <span>{error}</span>
    </div>
  );
}

/* 5️⃣ Password */
function Val5() {
  const [error, setError] = useState("");
  return (
    <div>
      <h4>5. Password</h4>
      <input
        type="password"
        onBlur={(e) =>
          setError(
            handleInputValid(e.target.value, "password")
              ? ""
              : "Min 6 characters"
          )
        }
      />
      <span>{error}</span>
    </div>
  );
}

/* 6️⃣ Confirm password */
function Val6() {
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      <h4>6. Confirm Password</h4>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm"
        onBlur={(e) =>
          setError(e.target.value === pass ? "" : "Passwords not match")
        }
      />
      <span>{error}</span>
    </div>
  );
}

/* 7️⃣ No spaces */
function Val7() {
  const [error, setError] = useState("");
  return (
    <div>
      <h4>7. Username (no spaces)</h4>
      <input
        onBlur={(e) =>
          setError(e.target.value.includes(" ") ? "No spaces allowed" : "")
        }
      />
      <span>{error}</span>
    </div>
  );
}

/* 8️⃣ Age range */
function Val8() {
  const [error, setError] = useState("");
  return (
    <div>
      <h4>8. Age Range</h4>
      <input
        onBlur={(e) => {
          const age = Number(e.target.value);
          setError(age < 18 || age > 60 ? "Age must be 18-60" : "");
        }}
      />
      <span>{error}</span>
    </div>
  );
}

/* 9️⃣ Conditional validation */
function Val9() {
  const [type, setType] = useState("email");
  const [error, setError] = useState("");

  return (
    <div>
      <h4>9. Conditional</h4>
      <select onChange={(e) => setType(e.target.value)}>
        <option value="email">Email</option>
        <option value="number">Number</option>
      </select>
      <input
        onBlur={(e) =>
          setError(
            handleInputValid(e.target.value, type)
              ? ""
              : `Invalid ${type}`
          )
        }
      />
      <span>{error}</span>
    </div>
  );
}

/* 🔟 Multiple rules (advanced) */
function Val10() {
  const [error, setError] = useState("");

  return (
    <div>
      <h4>10. Multiple Rules</h4>
      <input
        onBlur={(e) => {
          const v = e.target.value;
          if (!handleInputValid(v, "required")) return setError("Required");
          if (!handleInputValid(v, "min3")) return setError("Min 3 chars");
          if (!handleInputValid(v, "email")) return setError("Invalid email");
          setError("");
        }}
      />
      <span>{error}</span>
    </div>
  );
}
