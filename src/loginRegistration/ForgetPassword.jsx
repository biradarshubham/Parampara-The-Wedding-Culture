import { useState } from 'react'
import './Forget.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
    const [email,setEmail]=useState("");
    const [data,setData]=useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      axios.get("http://localhost:5000/register").then((v) => {
        setData(v.data);
      })
    }, [email]);

    function handle(e){
        e.preventDefault();
        const user = data.find(user => user.email === email);

        if (user) {
            navigate(`/setPass/${user.id}`);
        } else {
            toast.error("Email not found");
        }
    }

  return (
    <div className="forget">
        <form onSubmit={handle} className="forget-card">
        <div className="forget-lock-icon">🔒</div>
        <h1>Reset Password</h1>
        <input type="email" placeholder="Enter Email Id" onChange={(e) => setEmail(e.target.value)}/>
        <button type='submit'>Reset Password</button>
    </form>
    <ToastContainer/>
    </div>
  )
}

export default ForgetPassword

