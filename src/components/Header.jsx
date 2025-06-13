import { Link, NavLink } from "react-router-dom"

function Header () {
  const activeStyles = {
        textDecoration: "underline",
        color: "rgb(101, 213, 228)"
  }

  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" style={({ isActive }) => isActive ? activeStyles : null}>Home</NavLink></li>
          <li><NavLink to="/rate" style={({ isActive }) => isActive ? activeStyles : null}>Rate</NavLink></li>
          <li><NavLink to="/get-movie" style={({ isActive }) => isActive ? activeStyles : null}>Recommendations</NavLink></li>
          <li><NavLink to="/watchlist" style={({ isActive }) => isActive ? activeStyles : null}>Watchlist</NavLink></li>
          <li><NavLink to="/login" style={({ isActive }) => isActive ? activeStyles : null}>Log in</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header