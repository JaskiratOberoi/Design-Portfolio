import React from "react";
import {Link} from "react-router-dom";
import developer from "./media/code.svg";

export default function Hero() {
  return (
    <main>
      <div className="hero">
        <div className="hero-text">
          <h1>UI/UX Practioner</h1>
          <h2> Frontend Web Developer</h2>
          <div className="intro">
            I’ve always sought out opportunities and challenges that are
            meaningful to me.
          </div>
          <div className="get-in-touch">
            <Link className="cta" to="/Portfolio">
              My Projects
            </Link>
            <Link className="subtle" to="/linkedin">
              Let's Talk
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={developer} alt="hero"></img>
        </div>
      </div>
    </main>
  );
}
