import React, { useState } from "react";
import { LoginContext } from ".";

export default function LoginContextProvider({ children }) {
  const [logged, setLogged] = useState(false);
  return (
    <LoginContext.Provider value={{ logged, setLogged }}>
      {children}
    </LoginContext.Provider>
  );
}
