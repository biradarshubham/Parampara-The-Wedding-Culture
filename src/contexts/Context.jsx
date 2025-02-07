import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const Context = ({ children }) => {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  return (
    <AuthContext.Provider value={{ email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};