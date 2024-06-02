import React from "react";
import { Route } from "react-router-dom";

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
      <Route exact path="/" render={() => <Home />} />
      <Route path="/about" render={() => <About />} />
      <Route path="/career" render={() => <Career />} />
      <Route path="/portfolio" render={() => <Portfolio />} />
      <Route path="/skills" render={() => <Skills />} />
      <Route path="/hanseibydesign" render={() => <HanseiByDesign />} />
      {/* ? If no path matches, redirect to "/" (Home) */}
      {/* <Route path="*">
        <Redirect to="/" />
      </Route> */}
    </div>
  );
};

export default Routing;
