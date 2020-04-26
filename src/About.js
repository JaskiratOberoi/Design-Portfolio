import React from "react";
// import {Carousel} from "react-responsive-carousel";
// import jaskirat1 from "./media/jaskirat-1.JPG";
// import jaskirat2 from "./media/jaskirat-2.jpg";
// import jaskirat3 from "./media/jaskirat-3.jpg";
// import jaskirat4 from "./media/jaskirat-4.jpg";
// import jaskirat5 from "./media/jaskirat-7.png";
// import jaskirat6 from "./media/jaskirat-8.png";
import jaskirat7 from "./media/jaskirat-9.png";

export default function About() {
  return (
    <div className="f-main">
      <div className="f-image">
        {/* <Carousel
          showArrows={false}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          className="carousel"
        > */}
        {/* <div>
            <img src={jaskirat1} alt="me-1" />
          </div>
          <div>
            <img src={jaskirat2} alt="me-1" />
          </div>
          <div>
            <img src={jaskirat3} alt="me-1" />
          </div>
          <div>
            <img src={jaskirat4} alt="me-1" />
          </div>
          <div>
            <img src={jaskirat5} alt="me-1" />
          </div>
          <div>
            <img src={jaskirat6} alt="me-1" />
          </div> */}
        <div>
          <img src={jaskirat7} alt="me-1" />
        </div>
        {/* </Carousel> */}
      </div>

      <div className="f-body">
        <div className="quote">
          <i className="fas fa-quote-left"></i>Be kind to your future self!
          <i className="fas fa-quote-right"></i>
        </div>
        <div className="main-text">
          A designer by passion, an engineer by choice, I’m a determined Web
          Developer & UI/UX Designer who is driven and can achieve strict
          deadlines. I enjoy using my obsessive attention to detail, my
          unequivocal love for making things, and my mission-driven work ethic
          to create simple yet beautiful designs.
        </div>
      </div>
    </div>
  );
}
