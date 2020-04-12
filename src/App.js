import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import PageTransition from "react-router-page-transition";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero.js";
import Foot from "./Foot.js";
import About from "./About.js";
import Work from "./Work.js";
import Portfolio from "./Portfolio";

function App() {
  return (
    <Router>
      <header className="app-header">
        <Header />
      </header>
      <div className="App transition-wrapper">
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <PageTransition>
                <Hero />
              </PageTransition>
            </React.Fragment>
          )}
        />
        <Route
          path="/About"
          render={(props) => (
            <React.Fragment>
              <PageTransition>
                <About />
              </PageTransition>
            </React.Fragment>
          )}
        />
        <Route
          path="/Work"
          render={(props) => (
            <React.Fragment>
              <PageTransition>
                <Work />
              </PageTransition>
            </React.Fragment>
          )}
        />
        <Route
          path="/Portfolio"
          render={(props) => (
            <React.Fragment>
              <PageTransition>
                <Portfolio />
              </PageTransition>
            </React.Fragment>
          )}
        />
        <Route
          path="/hanseibydesign"
          component={() => {
            window.location.href = "http://hanseibydesign.com/";
            return null;
          }}
        />
      </div>
      <footer className="footer">
        <Foot />
      </footer>
    </Router>
  );
}

export default App;
