import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./scss/App.css";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import HanseiByDesign from "./HanseiByDesign";

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

function App() {

  const trackingId = "UA-165898079-1"; 
ReactGA.initialize(trackingId);

  const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

  return (
    <Router history={history}>
      <header className="app-header">
        <Header />
      </header>
      <div className="App transition-wrapper">
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              {/* <PageTransition> */}
              <Hero />
              {/* </PageTransition> */}
            </React.Fragment>
          )}
        />
        <Route
          path="/about"
          render={(props) => (
            <React.Fragment>
              {/* <PageTransition> */}
              <About />
              {/* </PageTransition> */}
            </React.Fragment>
          )}
        />
        <Route
          path="/work"
          render={(props) => (
            <React.Fragment>
              {/* <PageTransition> */}

              <Work />

              {/* </PageTransition> */}
            </React.Fragment>
          )}
        />
        <Route
          path="/portfolio"
          render={(props) => (
            <React.Fragment>
              {/* <PageTransition> */}
              <Portfolio />
              {/* </PageTransition> */}
            </React.Fragment>
          )}
        />
        <Route
          path="/skills"
          render={(props) => (
            <React.Fragment>
              {/* <PageTransition> */}
              <Skills />
              {/* </PageTransition> */}
            </React.Fragment>
          )}
        />
        <Route
          path="/hanseibydesing"
          render={(props) => (
            <React.Fragment>
              {/* <PageTransition> */}
              <HanseiByDesign />
              {/* </PageTransition> */}
            </React.Fragment>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
