import React, { useState } from "react";
import { UsersContext } from ".";
import { string } from "yup";

export default function UsersContextProvider({ children }) {
  const [users, setUsers] = useState([]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
}
