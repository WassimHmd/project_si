import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

import './Navbar.css'

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <h1 onClick={()=>navigate("/")}>Clinique</h1>
      <div className="navbar-links">
        <Link to={"/test"}>test</Link>
        <Link to={"/test"}>test</Link>
        <Link to={"/test"}>test</Link>
      </div>
    </div>
  )
}

export default Navbar
