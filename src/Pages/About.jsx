import React from "react";

import jaskirat7 from "../media/jaskirat-9.png";
import mail from "../media/logos/svg/mail.svg";
import call from "../media/logos/svg/call.svg";

export default function About() {
  return (
    <div className="f-main">
      <div className="f-image">
        <div>
          <img src={jaskirat7} alt="me-1" />
        </div>
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
        <div className="contact-info">
          <p>
            <img src={mail} alt="Mail: " />
            <a href="mailto:me@jaskiratoberoi.com"> me@jaskiratoberoi.com</a>
            <img src={call} alt="Call: " />
            <a href="tel:+919818733538">+91 9818733538</a>
          </p>
        </div>
      </div>
    </div>
  );
}
