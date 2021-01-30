import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ styleClass = "" }) => {
  return (
    <ul className={`nav-links ${styleClass}`} id="navbar">
      <Link to="/career">
        <li className="ltr">Career</li>
      </Link>
      <Link to="/portfolio">
        <li className="ltr">Portfolio</li>
      </Link>
      <Link to="/skills">
        <li className="ltr">Skillset</li>
      </Link>
      <Link to="/about">
        <li className="ltr">About</li>
      </Link>
      <Link to="/hanseibydesign">
        <li className="ltr">Hansei By Design</li>
      </Link>
    </ul>
  );
};

export default NavLinks;
