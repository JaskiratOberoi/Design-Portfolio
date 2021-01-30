import React from "react";

const SocialLinks = ({ styleClass = "" }) => {
  return (
    <div className={`social-links ${styleClass}`}>
      <ul>
        <li>
          <a
            href="https://github.com/JaskiratOberoi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-alt" />
          </a>
        </li>
        <li>
          <a
            href="https://www.behance.net/JaskiratSOberoi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-behance" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jaskiratoberoi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/jaskirat.singh.oberoi.1996"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
