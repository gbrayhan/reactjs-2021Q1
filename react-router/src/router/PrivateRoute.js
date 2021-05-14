import React from "react"
import {Redirect, Route} from "react-router-dom";


const user = null;
const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    // <Route exact={props.exact} path={props.path} component={props.component}/>
    <Route {...rest}>
      {user ? (<Component/>) : <Redirect to="/login"/>}
    </Route>
  )
}

export default PrivateRoute;