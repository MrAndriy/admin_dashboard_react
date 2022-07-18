import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
      <span className="logo">lamabooking</span>
        <dir className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>

        </dir>
      </div>
    </div>
  )
}

export default Navbar