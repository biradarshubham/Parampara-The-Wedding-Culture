import { useEffect, useState } from "react";
import "./Forget.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SetPassword = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [pass, setPass] = useState({
    password:"",
    confirmPwd:""
  });

  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/register/" + id).then((v) => {
      setData(v.data);
    });
  }, [pass,id]);

  function handle(e) {
    e.preventDefault();
    if (pass.password !== pass.confirmPwd) {
      toast.error("Password and confirm should be same");
      return;
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        pass.password
      )
    ) {
      toast.error(
        "Password must be at least 8 characters long and include uppercase, lowercase letters, numbers, and special characters."
      );
      return;
    }
    axios.patch("http://localhost:5000/register/" + id,pass).then((v) => {
      console.log(v);
    });
    toast.success("Password Updated Successfully...")
    navigate("/success");
  }

  return (
    <div className="setPass">
      <div className="setPass-card">
        <h1 className="setPass-title">Change your password</h1>
        <p className="setPass-subtitle">
          Enter a new password below to change your password
        </p>
        <form onSubmit={handle} className="setPass-form">
          <div className="setPass-form-group">
            <label htmlFor="setPass-new-password">New password</label>
            <input
              type="password"
              id="setPass-new-password"
              placeholder="New password"
              onChange={(e) => setPass({...pass, password: e.target.value })}
            />
          </div>
          <div className="setPass-requirements">
            Password must be at least 8 characters long and include uppercase,
            lowercase letters, numbers, and special characters.
          </div>
          <div className="setPass-form-group">
            <label htmlFor="setPass-confirm-password">Confirm password</label>
            <input
              type="password"
              id="setPass-confirm-password"
              placeholder="Confirm your password"
              onChange={(e) =>
                setPass({...pass, confirmPwd: e.target.value })
              }
            />
          </div>
          <button type="submit">CHANGE PASSWORD</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SetPassword;
