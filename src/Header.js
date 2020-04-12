import React from "react";

export default function Header() {
  return (
    <nav>
      <div className="title">Jaskirat Singh Oberoi</div>
      <ul className="navbar">
        <li>Work-ex</li>
        <li>Portfolio</li>
        <li>About Me</li>
        <li>Hansei By Design</li>
      </ul>
      <div className="social">
        <ul>
          <li>
            <i class="fab fa-github-alt"></i>
          </li>
          <li>
            <i class="fab fa-behance"></i>
          </li>
          <li>
            <i class="fab fa-linkedin-in"></i>
          </li>
          <li>
            <i class="fab fa-facebook"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}
