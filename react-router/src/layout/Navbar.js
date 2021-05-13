import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar