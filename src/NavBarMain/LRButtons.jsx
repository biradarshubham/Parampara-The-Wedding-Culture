import { NavLink, useNavigate } from 'react-router-dom'
import './NavBarMain.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { CartContext } from '../contexts/ProductContext';

const LRButtons = () => {
  const { cartCount } = useContext(CartContext);
  
    const status=localStorage.getItem("login");
    const navigate = useNavigate();
     function show() {
        return status==="true" ? (
            <>
            <NavLink className="cart-logo" to="/cart"><i className="fa-solid fa-cart-shopping"></i><span> {cartCount}</span></NavLink>
            <button className="Login-Button"><NavLink to="/" onClick={changeStatus}>Logout</NavLink></button>
            </>
        ):
            (
            <>
            <button className="Login-Button"><NavLink to="/login" >Login</NavLink></button>
            <button className="Register-Button"><NavLink to="/registration" >Register</NavLink></button>
            </>
        );
      }

      const changeStatus = () => {
        toast.info("Do you want to exit?", {
          position: "top-center",
          autoClose: true,
          closeOnClick: true,
          draggable: false,
          closeButton: true,
          className: 'toast-red',
          
          onClose: () => {
            localStorage.removeItem("login");
            navigate("/login");
          }
        });
      };

  return (
    <div className="Nav-Button">
        {show()}
        <ToastContainer />
    </div>
      )
}

export default LRButtons
