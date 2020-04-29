import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./scss/App.css";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

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
          path="/hanseibydesign"
          component={() => {
            window.location.href = "http://hanseibydesign.com/";
            return null;
          }}
        />
      </div>
    </Router>
  );
}

export default App;
