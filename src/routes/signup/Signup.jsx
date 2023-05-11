import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import React from "react";
import logo from "../../assets/images/logo-black.png";
import { CiSquareAlert } from "react-icons/ci";
import "./Signup.css";

const Login = () => {


  return (
    <div className="formWrapper">
      <Link to="/">
        <img className="email-logo" src={logo} alt="Amazon logo" />
      </Link>
      <div className="loginContainer">
        <h1>Create account</h1>
        <form action="#" id="form">
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email or mobile phone number</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="At least 6 characters"
            minLength={6}
          />
          <div className="alert">
            <CiSquareAlert />
            Passwords must be at least 6 characters.
          </div>
          <label htmlFor="re-EnterPassword">Re-enter password</label>
          <input type="email" id="reEnterPassword" />
          <button type="submit" className="continue">
            Continue
          </button>
          <div className="privacy-policy">
            <p>
              By creating an account, you agree to Amazon's{" "}
              <Link>Conditions of Use</Link> and <Link>Privacy Notice</Link>
            </p>
          </div>
          <div className="others">
            <div className="row">
              <p>Already have an account?</p>
              <Link to="/login">
                Sign in <AiFillCaretRight />
              </Link>
            </div>
            <div className="row">
              <p>Buying for work?</p>
              <Link to="#">
                Create a free business account <AiFillCaretRight />
              </Link>
            </div>
          </div>
        </form>
      </div>

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
