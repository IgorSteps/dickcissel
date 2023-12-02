import React, { useState , useEffect} from "react"; 
import validator from 'validator'
import { useNavigate } from 'react-router-dom';


export default function Register({ mode, handleLoginSuccess}) {
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleLoginSuccess();
        navigate("/home");
    }

    // Validation.
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('') 
    const validatePassword = (value) => { 
        if (validator.isStrongPassword(value, { 
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1 
        })) { 
            setPasswordErrorMessage('') 
        } else { 
            setPasswordErrorMessage('Your Password is not strong') 
        } 
    } 

    const [nameErrorMessage, setNameErrorMessage] = useState('') 
    const validateNameIsNotNil = (name) => {
        if (name.trim().length === 0) {
            setNameErrorMessage('Name field must not be empty') 
        } else {
            setNameErrorMessage('') 
        }
    };

    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const validateEmail = (email) => {
        if (!validator.isEmail(email)) {
            setEmailErrorMessage("Please enter valid email")
        } else {
            setEmailErrorMessage('')
        }
    }

    // Warn users if they try to leave a page with unsaved changes.
//     useEffect(() => {
//         const handleBeforeUnload = (e) => {
//           const confirmationMessage = ''
//           e.returnValue = confirmationMessage;
//           return confirmationMessage;
//         };

//         window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

    return (
        <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form-content">
                <h3 className="login-form-title">Register</h3>
                <div className="text-center">
                    Already registered?{" "}
                    <span className="link-primary" onClick={mode}>
                    Login
                    </span>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="fullname" >Full Name</label>
                    <input
                    name="fullname" id="fullname"
                    type="text"
                    autoComplete="name"
                    className="form-control mt-1"
                    placeholder="Enter Full Name eg. John Smith"
                    onChange={(e) => validateNameIsNotNil(e.target.value)}
                    required
                    />
                     {nameErrorMessage && <div className="text-danger">{nameErrorMessage}</div>}
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="email">Email address</label>
                    <input
                    name="email" id="email"
                    type="email"
                    autoComplete="username"
                    className="form-control mt-1"
                    placeholder="Email Address eg. johnsmith@gmail.com"
                    onChange={(e) => validateEmail(e.target.value)}
                    required
                    />
                     {emailErrorMessage && <div className="text-danger">{emailErrorMessage}</div>}
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="dateofbirth">Date of Birth</label>
                    <input
                    name="dateofbirth" id="dateofbirth"
                    type="date"
                    autoComplete="bday"
                    className="form-control mt-1"
                    placeholder="Enter Date of birth"
                    required
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="newpassword">Password</label>
                    <input
                    name="newpassword" id="newpassword"
                    type="password"
                    autoComplete="new-password"
                    className="form-control mt-1"
                    placeholder="Password"
                    onChange={(e) => validatePassword(e.target.value)}
                    required
                    />
                    <small className="form-text text-muted">
                        Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character.
                    </small>
                    {passwordErrorMessage && <div className="text-danger">{passwordErrorMessage}</div>}
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-success">
                    Register
                    </button>
                </div>
            </div>
        </form>
        </div>
    )
}
