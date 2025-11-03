// App.js
import { UserProvider, useUser } from "./UserContext";

function Profile() {
  const { user, login, logout } = useUser();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      {user ? (
        <>
          <h2>Welcome, {user.name} 👋</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("Khaled Hisham")}>Login</button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <Profile />
    </UserProvider>
  );
}

// UserContext.js
import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
