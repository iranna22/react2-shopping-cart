import React, { useState } from "react";
import logo from "./images.jpg";
import { useNavigate } from "react-router-dom";
//import HomeScreen from "../screens/HomeScreen";
export default function LoginPage(props) {
  const navigate = useNavigate();
  const loginCredentials = {
    email: "iranna@gmail.com",
    password: "123456",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <section style={{ backgroundColor: "#e3eaa7", height: "737px" }}>
        <div className="container py-5 h-100">
          <h1 style={{ textAlign: "center" }}>
            <b>SHOPPING CART SYSTEM</b>
          </h1>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-9">
              <div className="card" style={{ borderRadius: "1rem 1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={logo}
                      alt="login form"
                      className="img"
                      style={{
                        borderRadius: "1rem 0 0 1rem",
                        width: "150px",
                        height: "100px",
                      }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          
                          <span className="h1 fw-bold mx-auto">WELCOME</span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>
                        <div className="form-outline mb-4">
                          <input
                            value={email}
                            onChange={(e) => {
                              const emailRegex = /\S+@\S+\.\S+/;
                              if (emailRegex.test(e.target.value)) {
                                setMessage("Your email looks good!");
                                setEmail(e.target.value);
                              } else {
                                setEmail(e.target.value);
                                setMessage("Please enter a valid email!");
                              }
                            }}
                            placeholder="Enter your Email address"
                            type="email"
                            id="inputEmail"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="inputEmail">
                            Email address
                          </label>
                          <span
                            style={{
                              fontWeight: "bold",
                              color: "red",
                              marginLeft: "10em",
                            }}
                          >
                            {message}
                          </span>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            value={password}
                            type="password"
                            id="inputPassword"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="inputPassword">
                            Password
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={(custom) => {
                              if (
                                email === loginCredentials.email &&
                                password === loginCredentials.password
                              ) {
                                navigate("/home");
                              } else {
                                alert("Wrong credentials");
                              }
                            }}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
