import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import "./scss/App.scss";

import Navbar from "./Components/Navbar";
import Routing from "./Components/Routing";
import Footer from "./Components/Footer";
import Cursor from "./Components/Cursor";

const App = () => {


  return (
    <Router>
      <Cursor />
      <Navbar />
      <Routing />
      <Footer />
    </Router>
  );
};

export default App;
