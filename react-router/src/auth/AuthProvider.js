import {createContext, useEffect, useState} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

  const login = () => {
    setUser({id: 1, username: "gbrayhan"})
  }
  const logout = () => {
    setUser(null)
  }
  const isLogged = () => {
    return !!user;
  }

  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      localStorage.removeItem("user");
      console.log(error);
    }
  }, [user]);


  const context = {
    user,
    login,
    logout,
    isLogged
  }
  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )

}
export {AuthContext}
export default AuthProvider;