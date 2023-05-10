import { Link } from "react-router-dom";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import React, { useState } from "react";
import logo from "../../assets/images/logo-black.png";
import "./Login.css";

const Login = () => {
  const [isIconDownVisible, setIsIconDownVisible] = useState(true);
  const [isIconRightVisible, setIsIconRightVisible] = useState(false);
  const [isProblemVisible, setIsProblemVisible] = useState(false);

  const showOrHide = () => {
    setIsIconDownVisible(!isIconDownVisible);
    setIsIconRightVisible(!isIconRightVisible);
    setIsProblemVisible(!isProblemVisible);
  };

  return (
    <div className="formWrapper">
      <Link to="/">
        <img className="email-logo" src={logo} alt="Amazon logo" />
      </Link>
      <div className="loginContainer">
        <h1>Sign-In</h1>
        <form action="#" id="form">
          <label htmlFor="email">Email or mobile phone number</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button type="submit" className="continue">
            Continue
          </button>
          <div className="privacy-policy">
            <p>
              By continuing, you agree to Amazon's{" "}
              <Link>Conditions of Use</Link> and <Link>Privacy Notice</Link>
            </p>
          </div>
          <div className="need-help" onClick={showOrHide}>
            <div
              className="needIconDown needIcon"
              style={
                isIconDownVisible ? { display: "block" } : { display: "none" }
              }
            >
              <AiFillCaretDown />
            </div>
            <div
              className="needIconRight"
              style={
                isIconRightVisible ? { display: "block" } : { display: "none" }
              }
            >
              <AiFillCaretRight />
            </div>
            <span>Need help?</span>
          </div>

          <div
            className="problem"
            style={
              isProblemVisible ? { display: "block" } : { display: "none" }
            }
          >
            <Link>
              <p>Forgot your password?</p>
            </Link>
            <Link>
              <p>Other issues with Sign-In</p>
            </Link>
          </div>
        </form>
      </div>
      <Link to="/signup">
        <button className="create_account">Create your Amazon Account</button>
      </Link>

      <div className="footer">
        <ul>
          <li> Conditions of Use </li>
          <li> Privacy Notice </li>
          <li> Help </li>
        </ul>
        <p>&copy; 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default Login;
