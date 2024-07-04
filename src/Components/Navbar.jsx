import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import NavLinks from "../Constants/NavLinks";
import SocialLinks from "../Constants/SocialLinks";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    let body = document.getElementById("body");
    if (navbarOpen) {
      body.classList.add("body-padding-adder");
    }
    return () => {
      body.classList.remove("body-padding-adder");
    };
  }, [navbarOpen]);

  return (
    <nav>
      <div className="title">
        <Link to="/">Jaskirat Singh Oberoi</Link>
      </div>
      {/* <NavLinks
        styleClass={`navbar ${navbarOpen ? "display-flex" : ""}`}
        onClick={() => setNavbarOpen(!navbarOpen)}
      /> */}
      <ul
        className={`navbar nav-links ${navbarOpen ? "display-flex" : ""}`}
        id="navbar"
      >
        <Link to="/career" onClick={() => setNavbarOpen(!navbarOpen)}>
          <li className="ltr">Career</li>
        </Link>
        <Link to="/portfolio" onClick={() => setNavbarOpen(!navbarOpen)}>
          <li className="ltr">Portfolio</li>
        </Link>
        <Link to="/skills" onClick={() => setNavbarOpen(!navbarOpen)}>
          <li className="ltr">Skillset</li>
        </Link>
        <Link to="/about" onClick={() => setNavbarOpen(!navbarOpen)}>
          <li className="ltr" onClick={() => setNavbarOpen(!navbarOpen)}>
            About
          </li>
        </Link>
        <Link to="/hanseibydesign" onClick={() => setNavbarOpen(!navbarOpen)}>
          <li className="ltr">Hansei By Design</li>
        </Link>
      </ul>
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
