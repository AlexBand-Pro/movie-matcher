import { Link, NavLink } from "react-router-dom"

function Header () {
  const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "aliceblue"
  }

  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" style={({ isActive }) => isActive ? activeStyles : null}>Home</NavLink></li>
          <li><NavLink to="/rate" style={({ isActive }) => isActive ? activeStyles : null}>Rate</NavLink></li>
          <li><NavLink to="/get-movie" style={({ isActive }) => isActive ? activeStyles : null}>Get a movie</NavLink></li>
          <li><NavLink to="/log-in" style={({ isActive }) => isActive ? activeStyles : null}>Log in</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header