import { Navigate, NavLink } from 'react-router-dom'
import './NavBarMain'

const NavMenu2 = () => {
    function profile(){
      Navigate("/profile")
    }
    function location(){
      Navigate('/location')
    }
  return (
    <div className="Nav-Menu2" id="navLinks">
      <NavLink to="/profile"><i className="fa-regular fa-user" onClick={profile}></i></NavLink> 
      <NavLink to="/location"><i className="fa-solid fa-location-dot" onClick={location}></i></NavLink>
    </div>
  )
}

export default NavMenu2
