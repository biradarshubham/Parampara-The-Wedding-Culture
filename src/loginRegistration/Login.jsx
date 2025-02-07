import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../contexts/Context";


const Login = () => { 
  const { setEmail } = useContext(AuthContext);


    const [value, setValue] = useState({
      email: "",
      pwd: ""
    });
    const [data, setData] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      axios.get("http://localhost:5000/register").then((v) => {
        setData(v.data);
      })
    }, [value]);
    
    function handleSubmit(e) {
      e.preventDefault();
      const user = data.filter((v) => v.email === value.email && v.password === value.pwd);
      // console.log("user is",user,data);
      if (user[0]?.email === value.email && user[0]?.password === value.pwd) {
        // console.log(user[0].email);
        setEmail(user[0].email);
        localStorage.setItem("login",true );
        toast.success("Login successful", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error("Invalid credentials", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  
  return (
    <>
    <div className="loginMainContainer">
    <div className="login-container">
      <div className="login-header">
        <h1>Welcome Back</h1>
        <p>Please enter your credentials to login</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            onChange={(e)=>setValue({...value,email:e.target.value})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            onChange={(e)=>setValue({...value,pwd:e.target.value})}
          />
        </div>
        <div className="remember-forgot">
          <label className="remember-me">
            <input type="checkbox" />
            Remember me
          </label>
          <Link to="/forget" className="forgot-password">
            Forgot Password?
          </Link>
        </div>
        <button type="submit" className="login-button" >
          Log In
        </button>
        <div className="signup-link">
          Don't have an account? <Link to="/registration">Sign up</Link>
        </div>
      </form>
    </div>
    </div>
    <ToastContainer />
    </>
  );
};

export default Login;
