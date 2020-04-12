import React from "react";
import {Link} from "react-router-dom";
import cmr from "./media/cmr.png";
import covid from "./media/covid.png";
import todo from "./media/todo.png";
import choose from "./media/choose.png";
import mori from "./media/mori.png";

export default function Portfolio() {
  return (
    <div className="main">
      <h1 className="p-header">My Creations</h1>
      <h2 className="quote">
        "Instead of worry about what you cannot control, shift your energy to
        what you can create"s
      </h2>

      <div className="project-cards">
        <div className="project-card">
          <div className="p-image">
            <img src={cmr} alt="cmr"></img>
          </div>
          <h1 className="p-title">C.M.R Gamming</h1>
          <div className="p-details">
            <span>Design:</span> Adobe XD, Photoshop <br />
            <span>Dev:</span> HTML5, Sass, Vanilla JS
          </div>
        </div>

        <div className="project-card">
          <div className="p-image">
            <img src={covid} alt="covid"></img>
          </div>

          <h1 className="p-title">Covid 19 India Tacker</h1>
          <div className="p-details">
            <span>Design:</span> Adobe XD, Photoshop <br />
            <span>Dev:</span> HTML5, Sass, Python 3
          </div>
        </div>

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

        <div className="project-card">
          <div className="p-image">
            <img src={cmr} alt="cmr"></img>
          </div>
          <h1 className="p-title">C.M.R Gamming's Official Website</h1>
          <div className="p-details"></div>
        </div>

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

        <div className="project-card">
          <div className="p-image">
            <img src={cmr} alt="cmr"></img>
          </div>
          <h1 className="p-title">C.M.R Gamming's Official Website</h1>
          <div className="p-details"></div>
        </div>

        <div className="project-card">
          <div className="p-image">
            <img src={cmr} alt="cmr"></img>
          </div>
          <h1 className="p-title">C.M.R Gamming's Official Website</h1>
          <div className="p-details"></div>
        </div>
      </div>
    </div>
  );
}
