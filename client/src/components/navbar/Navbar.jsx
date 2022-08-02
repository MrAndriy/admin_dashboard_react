import "./navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
      <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
      <span className="logo">Booking</span>
      </Link>
        <dir className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>

        </dir>
      </div>
    </div>
  )
}

export default Navbar