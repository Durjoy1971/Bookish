import React, { useContext, useState } from "react";
import SignInForm from "./SignInForm";
import SignupForm from "./SignupForm";
import { LoginContext } from "../context";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [toogle, setToggle] = useState(true);
  const handleBtnClicked = () => {
    setToggle(!toogle);
  };
  const loginStatus = useContext(LoginContext).logged;

  return (
    <>
      {!loginStatus && toogle && <SignInForm handleBtnClicked={handleBtnClicked} />}
      {!loginStatus && !toogle && <SignupForm handleBtnClicked={handleBtnClicked} />}
      {loginStatus && <h1 className="text-center mt-10"> You Should Not Be Here ☹️. <span className="text-red-500 underline hover:cursor-pointer" onClick={() => navigate('/')}>Click Me</span></h1>}
    </>
  );
}
