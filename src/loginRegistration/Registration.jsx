import { useState } from 'react';
import './Registration.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const [register,setRegister] = useState({
        firstName:"",
        lastName:"",
        email:"",
        contact:"",
        password:"",
        confirmPwd:"",
        terms:""
      })
      const navigate = useNavigate()
    
      function handleSubmit(e){
        e.preventDefault();
        if (register.password !== register.confirmPwd) {
            toast.error("Password and confirm should be same");
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(register.password)) {
            toast.error("Password must be at least 8 characters long and include uppercase, lowercase letters, numbers, and special characters.");
            return;
        }
        axios.post("http://localhost:5000/register",register).then(() => navigate("/login")).catch(toast.error("Registration failed"));
      }
  return (
    <div className='RegisterMainContainer'>
<div className="registration-container">
        <div className="registration-header">
            <h1>Create Account</h1>
            <p>Please fill in the information below</p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        placeholder="Enter your first name"
                        required
                        onChange={(e)=>setRegister({...register,firstName:e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        placeholder="Enter your last name"
                        required
                        onChange={(e)=>setRegister({...register,lastName:e.target.value})}
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email"
                    required
                    onChange={(e)=>setRegister({...register,email:e.target.value})}
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Enter your phone number"
                    pattern="[0-9]{10}"
                    onChange={(e)=>setRegister({...register,contact:e.target.value})}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Create a password"
                    required
                    onChange={(e)=>setRegister({...register,password:e.target.value})}
                />
                <div className="password-requirements">
                    Password must be at least 8 characters long and include uppercase, lowercase letters, numbers, and special characters.
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input 
                    type="password" 
                    id="confirmPassword" 
                    placeholder="Confirm your password"
                    required
                    onChange={(e)=>setRegister({...register,confirmPwd:e.target.value})}
                />
            </div>
            <div className="terms">
                <input type="checkbox" id="terms" value={true} required onChange={(e)=>setRegister({...register,terms:e.target.value})} />
                <label htmlFor="terms">
                    I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                </label>
            </div>
            <button type="submit" className="register-button">Create Account</button>
            <div className="login-link">
                Already have an account? <Link to="/login">Log in</Link>
            </div>
        </form>
    </div>
    <ToastContainer/>
    </div>
  )
}

export default Registration
