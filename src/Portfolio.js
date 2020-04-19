import React from "react";
import {Link} from "react-router-dom";
import cmr from "./media/cmr.png";
import covid from "./media/covid.png";
import todo from "./media/todo.png";
import choose from "./media/choose.png";
import mori from "./media/mori.png";
import life from "./media/life.png";
import tvs from "./media/tvs.png";
import csi from "./media/csi.png";
import ttt from "./media/ttt.png";
import portfolio from "./media/portfolio.png";

export default function Portfolio() {
  return (
    <div className="main">
      <h1 className="p-header">My Creations</h1>
      <h2 className="quote">
        "Instead of worrying about what you cannot control, shift your energy to
        what you can create"
      </h2>

      <div className="project-cards">
        <a
          href="https://tic-tac-toe-36436.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-card">
            <div className="p-image">
              <img src={ttt} alt="ttt"></img>
            </div>
            <h1 className="p-title">Tic Tac Toe</h1>
            <div className="p-details">
              <span>Design:</span> Nebular UI <br />
              <span>Dev:</span> Angular JS, PWA, Sass
            </div>
          </div>
        </a>

        <Link to="/" target="_blank">
          <div className="project-card">
            <div className="p-image">
              <img src={portfolio} alt="cmr"></img>
            </div>
            <h1 className="p-title"> this.Portfolio</h1>
            <div className="p-details">
              <span>Design:</span> Minimal, Neumorphic
              <br />
              <span>Dev:</span> React JS, Router, Sass
            </div>
          </div>
        </Link>

        <Link to="/cmr" target="_blank">
          <div className="project-card">
            <div className="p-image">
              <img src={cmr} alt="cmr"></img>
            </div>
            <h1 className="p-title">C.M.R Gaming</h1>
            <div className="p-details">
              <span>Design:</span> Minimalistic , Adobe XD <br />
              <span>Dev:</span> HTML5, Sass, Vanilla JS
            </div>
          </div>
        </Link>

        <Link to="/covid" target="_blank">
          <div className="project-card">
            <div className="p-image">
              <img src={covid} alt="covid"></img>
            </div>
            <h1 className="p-title">Covid-19 India Tacker</h1>
            <div className="p-details">
              <span>Design:</span> Flat UI, Adobe XD <br />
              <span>Dev:</span> HTML5, Sass, Python 3
            </div>
          </div>
        </Link>

        <Link to="/jstodo" target="_blank">
          <div className="project-card">
            <div className="p-image">
              <img src={todo} alt="cmr"></img>
            </div>
            <h1 className="p-title">Pure JS Todo App</h1>
            <div className="p-details">
              <span>Design:</span> N/A <br />
              <span>Dev:</span> HTML5, Sass, Vanilla JS
            </div>
          </div>
        </Link>

        <Link to="lifecal" target="_blank">
          <div className="project-card">
            <div className="p-image">
              <img src={life} alt="cmr"></img>
            </div>
            <h1 className="p-title">Life Calendar</h1>
            <div className="p-details">
              <span>Design:</span> Neumorphic Design <br />
              <span>Dev:</span> HTML5, Sass, Vanilla JS
            </div>
          </div>
        </Link>

        <Link to="/csi" target="_blank">
          <div className="project-card">
            <div className="p-image">
              <img src={csi} alt="cmr"></img>
            </div>
            <h1 className="p-title">CSI Amity Student Branch</h1>
            <div className="p-details">
              <span>Design:</span> Minimal Design <br />
              <span>Dev:</span> HTML5, W3 CSS, Vanilla JS
            </div>
          </div>
        </Link>

        <Link to="/choose" target="_blank">
          <div className="project-card">
            <div className="p-image">
              <img src={choose} alt="cmr"></img>
            </div>
            <h1 className="p-title">Choose Life</h1>
            <div className="p-details">
              <span>Design:</span> Adobe XD, Photoshop <br />
              <span>Dev:</span> N/A
            </div>
          </div>
        </Link>

        <Link to="/tvs" target="_blank">
          <div className="project-card">
            <div className="p-image">
              <img src={tvs} alt="cmr"></img>
            </div>
            <h1 className="p-title">S.K. TVS Motors</h1>
            <div className="p-details">
              <span>Design:</span> Adobe XD, Photoshop <br />
              <span>Dev:</span> N/A
            </div>
          </div>
        </Link>

        <Link to="/mori" target="_blank">
          <div className="project-card">
            <div className="p-image">
              <img src={mori} alt="cmr"></img>
            </div>
            <h1 className="p-title">Memento Mori</h1>
            <div className="p-details">
              <span>Design:</span> Adobe XD, Photoshop <br />
              <span>Dev:</span> N/A
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
