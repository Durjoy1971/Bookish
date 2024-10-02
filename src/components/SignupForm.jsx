import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

//* npm install formik --save
//* npm install yup --save

export default function SignupForm({ handleBtnClicked }) {
  const navigate = useNavigate();

  // A custom validation function. This must return an object which keys are symmetrical to our values/initialValues
  const validate = (values) => {
    const errors = {};
    if (!values.fullName) {
      errors.fullName = "Required";
    } else if (values.fullName.trim().length > 15) {
      errors.fullName = "Must be 15 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.trim().length <= 8) {
      errors.password = "Must be 4 characters or less";
    }

    return errors;
  };

  // Pass the useFormik() hook initial form values and a submit function that will be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      navigate("/");
      handleBtnClicked();
    },
  });

  return (
    <div className="flex justify-center items-center mt-40">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-[#f3f1f0] px-8 py-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2
          className={`text-2xl font-bold mb-6 text-center ${
            (formik.touched.fullName && formik.errors.fullName) ||
            (formik.touched.email && formik.errors.email) ||
            (formik.errors.password && formik.touched.password)
              ? "text-red-500"
              : "text-blue-500"
          }`}
        >
          Sign Up
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-red-500 text-sm mt-1 ml-2">
              {formik.errors.fullName}
            </div>
          ) : null}
        </div>

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
            placeholder="Enter your email"
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
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
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
          <button
            onClick={handleBtnClicked}
            className="text-blue-500 hover:text-blue-700 hover:underline hover:font-medium hover:cursor-pointer"
          >
            Sign In
          </button>
        </h1>
      </form>
    </div>
  );
}
