import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import userSignInImage from "../Images/usersignin.jpg";
import DineOptimaContext from "../context/Dineoptima/DineOptimaContext";


function Signin(props) {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  const context = useContext(DineOptimaContext);
  
  const { host } = context;

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    const isValid = validateEmail(value);
    if (!isValid) {
      e.target.setCustomValidity('Please enter a valid email address.');
    } else {
      e.target.setCustomValidity('');
    }
    onchange(e);
  };

  const hanleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Account Created Successfully", "green");
    } else {
      props.showAlert("User already Exists", "red");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="signinContainer flex mx-5 my-10 justify-center items-center w-5/6 h-full rounded-3xl">
        <div
          className="left w-1/2 h-[90%] ml-5 rounded-l-lg"
          style={{
            background: `url(${userSignInImage})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom", // Center horizontally, align to the bottom vertically
          }}
        ></div>

        <div className="right h-[90%] flex w-1/2 justify-center mr-5 rounded-r-lg border-black border-t border-b border-r">
          <div className="w-full">
            <form className="rounded-xl py-2 px-5 m-2" onSubmit={hanleSubmit}>
              <div className="flex items-center justify-center underline">
                <h1 className="text-2xl font-bold">SIGN IN</h1>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-xl font-bold text-black"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={credentials.Name}
                  onChange={onchange}
                  className="border border-black text-black text-base rounded-lg outline-none block w-full p-2.5"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-xl font-bold text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleEmailChange}
                  className="border border-black text-black text-base rounded-lg outline-none block w-full p-2.5"
                  required
                  autoComplete="username"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-xl font-bold text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  minLength={5}
                  value={credentials.password}
                  onChange={onchange}
                  className="border border-black text-black text-base rounded-lg outline-none block w-full p-2.5"
                  required
                  autoComplete="current-password"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="cpassword"
                  className="block mb-2 text-xl font-bold text-black"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  minLength={5}
                  value={credentials.cpassword}
                  onChange={onchange}
                  className="border border-black text-black text-base rounded-lg outline-none block w-full p-2.5"
                  required
                  autoComplete="current-password"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
