import React, { useState } from "react"; 
import validator from 'validator'


export default function Register({ Mode }) {
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
        if (name.trim().length == 0) {
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

    return (
        <div className="login-form-container">
        <form className="login-form">
            <div className="login-form-content">
                <h3 className="login-form-title">Register</h3>
                <div className="text-center">
                    Already registered?{" "}
                    <span className="link-primary" onClick={Mode}>
                    Login
                    </span>
                </div>
                <div className="form-group mt-3">
                    <label>Full Name</label>
                    <input
                    type="text"
                    autoComplete="name"
                    className="form-control mt-1"
                    placeholder="Enter Full Name"
                    onChange={(e) => validateNameIsNotNil(e.target.value)}
                    required
                    />
                     {nameErrorMessage && <div className="text-danger">{nameErrorMessage}</div>}
                </div>
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                    type="email"
                    autoComplete="username"
                    className="form-control mt-1"
                    placeholder="Email Address"
                    onChange={(e) => validateEmail(e.target.value)}
                    required
                    />
                     {emailErrorMessage && <div className="text-danger">{emailErrorMessage}</div>}
                </div>
                <div className="form-group mt-3">
                    <label>Date of Birth</label>
                    <input
                    type="date"
                    className="form-control mt-1"
                    placeholder="Enter Date of birth"
                    required
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input
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
