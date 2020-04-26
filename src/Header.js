import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
  function navbarToggle(e) {
    e.preventDefault();
    let body = document.getElementById("body");
    let navbar = document.getElementById("navbar");
    body.classList.toggle("body-padding-adder");
    navbar.classList.toggle("display-flex");
  }
  return (
    <nav>
      <div className="title">
        <Link to="/">Jaskirat Singh Oberoi</Link>
      </div>
      <ul className="navbar" id="navbar">
        <li className="ltr">
          <Link to="/work">Experience</Link>
        </li>
        <li className="ltr">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="ltr">
          <Link to="/flow">Workflow</Link>
        </li>
        <li className="ltr">
          <Link to="/about">About</Link>
        </li>
        <li className="ltr">
          <a
            href="https://hanseibydesign.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hansei By Design
          </a>
        </li>
      </ul>
      <div className="mobile-nav" id="menubtn" onClick={navbarToggle}>
        <i className="fas fa-bars"></i>
      </div>
      <div className="social">
        <ul>
          <li>
            <a
              href="https://github.com/JaskiratOberoi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-alt"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/JaskiratSOberoi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-behance"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jaskiratoberoi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/jaskirat.singh.oberoi.1996"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
