import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { LoginContext, UsersContext } from "../context";
import LoginContextProvider from "../context/LoginContextProvider";
import MyBooks from "./MyBooks";

export default function SignInForm({ handleBtnClicked }) {
  const navigate = useNavigate();
  const usersContext = useContext(UsersContext);
  const loginContext = useContext(LoginContext);

  const [ab, sab] = useState(false);

  // A custom validation function. This must return an object which keys are symmetrical to our values/initialValues
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.trim().length <= 4) {
      errors.password = "Invalid password";
    }

    return errors;
  };

  // Pass the useFormik() hook initial form values and a submit function that will be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      const user = [];
      let flag = false;
      user.map((user) => {
        if (
          user.email.trim() === values.email &&
          user.password.trim() === values.password
        ) {
          flag = true;
        }
      });

      if (flag) {
        loginContext.setLogged = true;
        navigate("/books");
        alert("Welcome to Bookish");
        resetForm();
      } else {
        alert("Login Failed");
        resetForm();
      }
    },
  });

  return (
    <div className="flex justify-center items-center mt-40">
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
        role="alert"
      >
        <strong className="font-bold">Login Failed!</strong>
        <span className="block sm:inline">
          {" "}
          Please check your email and password.
        </span>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className={`bg-[#f0efe4] px-8 py-6 rounded-lg shadow-md w-full max-w-sm `}
      >
        <h2
          className={`text-2xl font-bold mb-6 text-center ${
            (formik.touched.email && formik.errors.email) ||
            (formik.errors.password && formik.touched.password)
              ? "text-red-500"
              : "text-blue-500"
          }`}
        >
          Sign In
        </h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm mt-1 ml-2">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm mt-1 ml-2">
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
        <h1 className="text-center mt-5">
          Don't have an account?{" "}
          <span
            onClick={handleBtnClicked}
            className="text-blue-500 hover:text-blue-700 hover:underline hover:font-medium hover:cursor-pointer"
          >
            Sign Up
          </span>
        </h1>
      </form>
    </div>
  );
}
