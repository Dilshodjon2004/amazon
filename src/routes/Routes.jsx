import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Signup from "./signup/Signup";
const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </>
  );
};

export default Routes;
