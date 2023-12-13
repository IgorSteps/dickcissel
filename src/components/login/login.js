import BasicNavbar from "../navbar/navbar"
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";

export default function Login({ mode, handleLoginSuccess }) {
   // Warn users if they try to leave a page with unsaved changes.
   useEffect(() => {
    const handleBeforeUnload = (e) => {
      const msg = 'You have unsaved changes!'
      e.returnValue = msg;
      return msg;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

return () => {
  window.removeEventListener('beforeunload', handleBeforeUnload);
};
}, []);

  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    handleLoginSuccess();
    
    if (email == 'admin@gmail.com' && password == 'admin') {
      navigate("/admin");
    } else {
      navigate("/home");
    }
  };

  return (
    <>
    <BasicNavbar />
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-content">
          <h3 className="login-form-title">Login</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <span className="link-primary" onClick={mode}>
              Register
            </span>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email address</label>
            <input
              name="email" id="email"
              autoComplete="username"
              type="email"
              onChange={e => setEmail(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter email" />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="currentpassword">Password</label>
            <input
              name="currentpassword" id="currentpassword"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password" />
          </div>

          <div className="d-grid gap-2 mt-4">
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </div>

        </div>
      </form>
    </div>
    </>
  )
}