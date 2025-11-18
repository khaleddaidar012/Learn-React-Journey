import {useUser} from "./UserProvider";

const UserApp = () => {
  const {user,login,logout}= useUser();
  return (
    
    <div       style={{
        
        
        height: "100vh",
        textAlign: "center",
        paddingTop: "100px",
        width:"100vw",
      }}>
      <h2>Welcome, {user.name}</h2>
      {user.loggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login("Khaled")}>Login</button>
      )}
    </div>
  );
};
export default UserApp;