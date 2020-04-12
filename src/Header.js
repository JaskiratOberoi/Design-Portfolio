import React from "react";

export default function Header() {
  return (
    <nav>
      <div className="title">
        <a href="/">Jaskirat Singh Oberoi</a>
      </div>
      <ul className="navbar">
        <li className="ltr">
          <a href="/Work">Work-ex</a>
        </li>
        <li className="ltr">
          <a href="/Portfolio">Portfolio</a>
        </li>
        <li className="ltr">
          <a href="/About">About Me</a>
        </li>
        <li className="ltr">
          <a href="/hanseibydesign" target="_blank">
            Hansei By Design
          </a>
        </li>
      </ul>
      <div className="social">
        <ul>
          <li>
            <i className="fab fa-github-alt"></i>
          </li>
          <li>
            <i className="fab fa-behance"></i>
          </li>
          <li>
            <i className="fab fa-linkedin-in"></i>
          </li>
          <li>
            <i className="fab fa-facebook"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}
