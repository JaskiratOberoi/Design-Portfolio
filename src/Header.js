import React from "react";

export default function Header() {
  return (
    <nav>
      <div className="title">
        <a href="/">Jaskirat Singh Oberoi</a>
      </div>
      <ul className="navbar">
        <li className="ltr">
          <a href="/Work">Experience</a>
        </li>
        <li className="ltr">
          <a href="/Portfolio">Portfolio</a>
        </li>
        <li className="ltr">
          <a href="/Flow">Workflow</a>
        </li>
        <li className="ltr">
          <a href="/About">About</a>
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
      <div className="mobile-nav">
        <i class="fas fa-bars"></i>
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
