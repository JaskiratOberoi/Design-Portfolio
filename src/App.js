import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
// import PageTransition from "react-router-page-transition";
import "./scss/App.css";
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
              {/* <PageTransition> */}
              <Hero />
              {/* </PageTransition> */}
            </React.Fragment>
          )}
        />
        <Route
          path="/About"
          render={(props) => (
            <React.Fragment>
              {/* <PageTransition> */}
              <About />
              {/* </PageTransition> */}
            </React.Fragment>
          )}
        />
        <Route
          path="/Work"
          render={(props) => (
            <React.Fragment>
              {/* <PageTransition> */}
              <Work />
              {/* </PageTransition> */}
            </React.Fragment>
          )}
        />
        <Route
          path="/Portfolio"
          render={(props) => (
            <React.Fragment>
              {/* <PageTransition> */}
              <Portfolio />
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

        {/* Social Link routes */}
        <Route
          path="/github"
          component={() => {
            window.location.href = "https://github.com/JaskiratOberoi";
            return null;
          }}
        />
        <Route
          path="/behance"
          component={() => {
            window.location.href = "https://www.behance.net/JaskiratSOberoi";
            return null;
          }}
        />
        <Route
          path="/linkedin"
          component={() => {
            window.location.href =
              "https://www.linkedin.com/in/jaskiratoberoi/";
            return null;
          }}
        />
        <Route
          path="/facebook"
          component={() => {
            window.location.href =
              "https://www.facebook.com/jaskirat.singh.oberoi.1996";
            return null;
          }}
        />

        {/* Portfolio routes */}
        <Route
          path="/cmr"
          component={() => {
            window.location.href = "https://cmrgaming.in";
            return null;
          }}
        />
        <Route
          path="/covid"
          component={() => {
            window.location.href = "https://covid19in.live";
            return null;
          }}
        />
        <Route
          path="/jstodo"
          component={() => {
            window.location.href = "http://get-organised.hanseibydesign.com/";
            return null;
          }}
        />
        <Route
          path="/lifecal"
          component={() => {
            window.location.href = "http://lifecalendar.tk";
            return null;
          }}
        />
        <Route
          path="/csi"
          component={() => {
            window.location.href = "http://csi-amity.tk";
            return null;
          }}
        />
        <Route
          path="/choose"
          component={() => {
            window.location.href =
              "https://www.behance.net/gallery/94964421/Choose-Life";
            return null;
          }}
        />
        <Route
          path="/tvs"
          component={() => {
            window.location.href =
              "https://www.behance.net/gallery/95252333/SK-TVS-Automobile-Franchise";
            return null;
          }}
        />
        <Route
          path="/mori"
          component={() => {
            window.location.href =
              "https://www.behance.net/gallery/93131927/Memento-Mori";
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
