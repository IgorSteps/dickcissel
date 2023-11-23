import React, { useState } from "react"
import Login from "../login/login";
import Register from "../register/register";

export default function Auth(props) {
    let [authMode, setAuthMode] = useState("login")

    const changeAuthMode = () => {
      setAuthMode(authMode === "login" ? "register" : "login")
    }

    return (
        <>
          {authMode === "login" ? (
            <Login Mode={changeAuthMode} />
          ) : (
            <Register Mode={changeAuthMode} />
          )}
        </>
      );
}