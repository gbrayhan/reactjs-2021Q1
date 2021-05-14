import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>


        <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
        <li><NavLink to="/payment" activeClassName="active">Payment</NavLink></li>

        <li><NavLink to="/register" activeClassName="active">Register</NavLink></li>
        <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>

      </ul>
    </div>
  )
}

export default Navbar