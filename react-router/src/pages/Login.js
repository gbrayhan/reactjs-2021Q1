import {useHistory, useLocation} from "react-router-dom";
import useAuth from "../auth/useAuth";

const Login = () => {
  const auth = useAuth()
  const location = useLocation()
  const history = useHistory()

  const previousObjectURL = location.state?.from;

  const handleLogin = () => {
    auth.login()
    history.push(previousObjectURL ? previousObjectURL : {pathname: "/dashboard"})
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => handleLogin()}>Sing In</button>
    </div>
  )
}
export default Login;