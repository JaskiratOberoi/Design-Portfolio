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
            <a href="/github" target="_blank">
              <i className="fab fa-github-alt"></i>
            </a>
          </li>
          <li>
            <a href="/behance" target="_blank">
              <i className="fab fa-behance"></i>
            </a>
          </li>
          <li>
            <a href="/linkedin" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="/facebook" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
