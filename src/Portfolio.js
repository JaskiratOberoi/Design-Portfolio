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
import covidjs from "./media/covidjs.png";
import tft from "./media/tft.png";

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
          href="http://covid19.hanseibydesign.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-card">
            <div className="p-image">
              <img src={covidjs} alt="covidjs"></img>
            </div>
            <h1 className="p-title">COVID-19 World Tracker</h1>
            <div className="p-details">
              <span>Design:</span> Material UI <br />
              <span>Dev:</span> React JS, CSS Modules
            </div>
          </div>
        </a>

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

        <a href="http://cmrgaming.in" target="_blank" rel="noopener noreferrer">
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
        </a>

        <a
          href="http://covid19in.live"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        </a>

        <a
          href="http://get-organised.hanseibydesign.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        </a>

        <a
          href="http://lifecalendar.tk"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        </a>

        <a href="http://csi-amity.tk" target="_blank" rel="noopener noreferrer">
          <div className="project-card">
            <div className="p-image">
              <img src={csi} alt="cmr"></img>
            </div>
            <h1 className="p-title">CSI Student Branch</h1>
            <div className="p-details">
              <span>Design:</span> Minimal Design <br />
              <span>Dev:</span> HTML5, W3 CSS, Vanilla JS
            </div>
          </div>
        </a>

        <a
          href="https://www.behance.net/gallery/94964421/Choose-Life"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        </a>

        <a
          href="https://www.behance.net/gallery/95252333/SK-TVS-Automobile-Franchise"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        </a>

        <a
          href="https://www.behance.net/gallery/94571539/Product-Page-Design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-card">
            <div className="p-image">
              <img src={tft} alt="product page"></img>
            </div>
            <h1 className="p-title">Sample Product Page</h1>
            <div className="p-details">
              <span>Design:</span> Wireframe, Adobe XD
              <br />
              <span>Dev:</span> N/A
            </div>
          </div>
        </a>

        <a
          href="https://www.behance.net/gallery/93131927/Memento-Mori"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        </a>
      </div>
    </div>
  );
}
