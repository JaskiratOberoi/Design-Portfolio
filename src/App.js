import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero.js";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <Header />
        </header>
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <Hero />
            </React.Fragment>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
