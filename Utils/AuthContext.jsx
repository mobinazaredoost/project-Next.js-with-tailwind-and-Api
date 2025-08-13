"use client";
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();
export default AuthContext;
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);
  }, []);

  const handleToken = (tk) => {
    if (tk) {
      localStorage.setItem("token", tk);
    } else {
      localStorage.removeItem("token");
    }
    setToken(tk);
  };
  return (
    <AuthContext.Provider value={{ token, handleToken }}>
      {children}
    </AuthContext.Provider>
  );
};
