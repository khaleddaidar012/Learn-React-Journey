
import { useContext } from "react";
import { createContext,useState } from "react";

const UserContext = createContext();



const UserProvider = ({children}) => {
    const [user,setUser] = useState({name:"Guest" , loggedIn : false});
    const login =(name) =>setUser({name,loggedIn:true});
    const logout =() =>setUser({name:"Guest" , loggedIn:false});
  return (
    <div>
        <UserContext.Provider value={{user,login,logout}}>
{children}
        </UserContext.Provider>
    </div>
  )
}

export default UserProvider
export const useUser =() => useContext(UserContext)