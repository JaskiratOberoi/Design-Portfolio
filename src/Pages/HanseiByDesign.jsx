import React from "react";
import hbd from "./media/hanseibydesign.png";

export default function HanseiByDesign() {
  return (
    <div className="h-main">
      <div className="banner">
        <a
          href="https://hanseibydesign.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-logo" src={hbd} alt="hansei by design" />
        </a>
      </div>
      <div className="h-desc">
        Hansei By Design is my brandname under which I develop/design all my
        freelance/open-source work. The concept of 'Hansei' is of Japanese
        origin which means to acknowledge one's own mistake and to pledge
        improvement. Hansei By Design roughly translates to reflective design
        which is the idea to keep improving step by step by reflecting on the
        past and learning from it to improve the future. <br />
      </div>
    </div>
  );
}
