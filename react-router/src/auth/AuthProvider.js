import {createContext, useState} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const login = () => {
    setUser({id: 1, username: "gbrayhan"})
  }
  const logout = () => {
    setUser(null)
  }


  const context = {
    user,
    login,
    logout,
  }
  return <AuthContext.Provider value={context}>
    {children}
  </AuthContext.Provider>

}
export {AuthContext}
export default AuthProvider;