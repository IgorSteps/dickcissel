import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext(null);

export const  AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        console.debug("Logged in")
        setIsLoggedIn(true);
    };

    const logout = () => {
        console.debug("Logged out")
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};