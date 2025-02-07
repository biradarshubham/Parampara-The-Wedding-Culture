import { NavLink } from 'react-router-dom';
import './MiniNavBar.css'
// import { NavLink } from 'react-router-dom'

const MiniNavBar = () => {
  function toggleMenu1() {
    const navLinks = document.getElementById('miniNavLinks');
    navLinks.classList.toggle('active');
}
  return (
    <>
    <div className='mini-nav-bar' id='miniNavLinks'> 
      <NavLink to="/saree">SAREES</NavLink>
      <NavLink to="/weddingCollectionForGroom">WEDDING COLLECTION FOR GROOM</NavLink>
      <NavLink to="/weddingCollectionForBride">WEDDING COLLECTION FOR BRIDE</NavLink>
      <NavLink to="/child">CHILD</NavLink>
      <NavLink to="/kurtis">KURTIS</NavLink>
      <NavLink to="/CordKurtis">CORD-KURTIS</NavLink>
      <NavLink to="/mens">MENS-SHIRT</NavLink>
      <NavLink to="/MensWear">MENS-WEAR</NavLink>
    </div>
    <div className="miniNavToggle" onClick={toggleMenu1}>
    <div></div>
    <div></div>
    <div></div>
    </div>
    </>
  )
}

export default MiniNavBar
