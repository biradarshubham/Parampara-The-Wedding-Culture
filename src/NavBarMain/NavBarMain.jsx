import Logo from "./Logo"
import LRButtons from "./LRButtons"
import NavMenu from "./NavMenu"
import NavMenu2 from "./NavMenu2"
import './NavBarMain.css'
import MiniNavBar from '../miniNavList/MiniNavBar'

const NavBarMain = () => {
  return (
    <>
    <div className="Nav-main-manage">
        <Logo/>
        <NavMenu/>
        <NavMenu2/>
        <LRButtons/>
    </div>
    <MiniNavBar/>
    </>
  )
}

export default NavBarMain
