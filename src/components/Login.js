import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import userLoginImage from "../Images/userlogin.jpg";
import DineOptimaContext from "../context/Dineoptima/DineOptimaContext";


function Login(props) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const context = useContext(DineOptimaContext);
  
  const { host } = context;

  const hanleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Logged In Successfully", "green");
    } else {
      // alert("Invalid credentials")
      props.showAlert("Invalid Credentials", "red");
    }
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className=" flex h-screen justify-center items-center bg-white">
      <div className="loginContainer flex mx-5 my-10 justify-center items-center w-5/6 h-full rounded-3xl">
        <div
          className="left w-1/2 h-[90%] ml-5 rounded-l-lg"
          style={{
            background: `url(${userLoginImage})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="right h-[90%] flex w-1/2 justify-center mr-5 rounded-r-lg border-black border-t border-b border-r">
          <div className="w-full h-full flex justify-center items-center">
            <form className="w-full p-10" onSubmit={hanleSubmit}>
              <div className="flex items-center justify-center underline">
                <h1 className="text-2xl font-bold mb-5">LOGIN</h1>
              </div>
              <div className="mb-6 ">
                <label
                  htmlFor="email"
                  className="block mb-2 ml-1 text-xl font-bold text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={onchange}
                  className="border border-black text-black text-base rounded-lg outline-none block w-full p-2.5"
                  required
                  autoComplete="username"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 ml-1 text-xl font-bold text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={onchange}
                  className="border border-black text-black text-base rounded-lg outline-none block w-full p-2.5"
                  required
                  autoComplete="current-password"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-1"
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

export default Login;
