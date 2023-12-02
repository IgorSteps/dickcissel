import React, { useState, useContext } from "react"
import Login from "../login/login";
import Register from "../register/register";
import {AuthContext} from "../context/authContext";

export default function Auth() {
    let [authMode, setAuthMode] = useState("login")
    const { login } = useContext(AuthContext);

    const handleLoginSuccess = () => {
      login();
    };

    const changeAuthMode = () => {
      setAuthMode(authMode === "login" ? "register" : "login");
    }

    return (
        <>
          {authMode === "login" ? (
            <Login mode={changeAuthMode} handleLoginSuccess={handleLoginSuccess} />
          ) : (
            <Register Mode={changeAuthMode} />
          )}
        </>
      );
}