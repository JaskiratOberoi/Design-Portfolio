import React from "react";

// import jaskirat7 from "../media/jaskirat-9.png";
import mail from "../media/logos/svg/mail.svg";
import call from "../media/logos/svg/call.svg";
import jay from "../media/jay.jpg";
import resume from "../media/Jaskirat Oberoi latest resume.pdf";


export default function About() {

  const downloadFile = () => window.open(
      resume,
      '_blank'
     );

  return (
    <div className="f-main">
      <div className="f-image">
        <div>
          <img src={jay} alt="me-1" />
        </div>
      </div>

      <div className="f-body">
        <div className="quote">
          <i className="fas fa-quote-left"></i>Be kind to your future self!
          <i className="fas fa-quote-right"></i>
        </div>
        <div className="main-text">
        An engineer by passion, a designer by choice, I'm a determined Design Technologist who thrives in fast-paced, dynamic environments. I possess a proven ability to translate complex challenges into innovative, user-centric outcomes. My goal is to contribute my skills and passion to a forward-thinking, high-growth organization.
        </div>
        <div className="contact-info">
            <div>
              <img src={mail} alt="Mail: " />
              <a href="mailto:me@jaskiratoberoi.com"> me@jaskiratoberoi.com</a>
            </div>
            <div>
              <img src={call} alt="Call: " />
              <a href="tel:+919818733538">+91-9818733538</a>
            </div>
        </div>
        <div className="cv-button">
              <button className="btn btn-secondary" onClick={downloadFile}>
                Download Resume
              </button>
            </div>
      </div>
    </div>
  );
}
