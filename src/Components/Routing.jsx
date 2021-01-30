import React from "react";
import { Redirect, Route } from "react-router-dom";

import {
  About,
  Career,
  HanseiByDesign,
  Home,
  Portfolio,
  Skills,
} from "../Pages";

const Routing = () => {
  return (
    <div className="page transition-wrapper">
      <Route exact path="/" render={(props) => <Home />} />
      <Route path="/about" render={(props) => <About />} />
      <Route path="/career" render={(props) => <Career />} />
      <Route path="/portfolio" render={(props) => <Portfolio />} />
      <Route path="/skills" render={(props) => <Skills />} />
      <Route path="/hanseibydesign" render={(props) => <HanseiByDesign />} />
      {/* ? If no path matches, redirect to "/" (Home) */}
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </div>
  );
};

export default Routing;
