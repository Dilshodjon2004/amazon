import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import Explore from "./explore/Explore";
import Pdp from "./pdp/Pdp";
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
      <Route exact path="/explorenow">
        <Explore />
      </Route>
      <Route path="/explorenow/:id">
        <Pdp />
      </Route>
    </>
  );
};

export default Routes;
