import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import "./scss/App.scss";

import Navbar from "./Components/Navbar";
import Routing from "./Components/Routing";
import Footer from "./Components/Footer";

const App = () => {


  return (
    <Router>
      <Navbar />
      <Routing />
      <Footer />
    </Router>
  );
};

export default App;
