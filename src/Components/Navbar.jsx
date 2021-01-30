import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    let body = document.getElementById("body");
    if (navbarOpen) {
      body.classList.add("body-padding-adder");
    } else {
      body.classList.remove("body-padding-adder");
    }
  }, [navbarOpen]);

  return (
    <nav>
      <div className="title">
        <Link to="/">Jaskirat Singh Oberoi</Link>
      </div>
      <NavLinks styleClass={`navbar ${navbarOpen ? "display-flex" : ""}`} />
      <SocialLinks styleClass="social" />
      <div
        className="mobile-nav"
        id="menubtn"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
