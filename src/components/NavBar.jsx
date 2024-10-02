import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../context";

export default function NavBar() {
  const loginStatus = useContext(LoginContext).logged;

  return (
    <div className="sticky px-14 top-0 py-3 backdrop-blur-lg border-b-2 border-b-stone-400/80">
      <div className="flex gap-4 justify-around container max-w-md mx-auto font-fredoka">
        <NavLink to="">Home</NavLink>
        <NavLink to="books">Books</NavLink>
        <NavLink to={loginStatus.logged ? "" : "login"}>
          {loginStatus.logged ? "Sign Out" : "Sign In"}
        </NavLink>
      </div>
    </div>
  );
}
