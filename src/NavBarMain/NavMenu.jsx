import { NavLink } from 'react-router-dom';
import './NavBarMain.css'

const NavMenu = () => {
    function toggleMenuBar() {
        const navLinks = document.getElementById('NavMenu');
        navLinks.classList.toggle('active');
    }
  return (
    <>
    <div className='Nav-Menu' id='NavMenu'>
      <ul>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/about">ABOUT</NavLink></li>
        <li><NavLink to="/service">SERVICE</NavLink></li>
        <li><NavLink to="/gallery">GALLERY</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
        <li><NavLink to="/offer">OFFER</NavLink></li>
      </ul>
    </div>
     <div className="NavMainToggle" onClick={toggleMenuBar}>
     <div></div>
     <div></div>
     <div></div>
     </div>
     </>
  )
}

export default NavMenu
