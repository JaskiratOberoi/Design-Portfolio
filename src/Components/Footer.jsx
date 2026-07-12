import { useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic.jsx";
import { EMAIL, SOCIALS } from "../data.js";

const PROJECT_TYPES = [
  "Design system",
  "Website",
  "Coded prototype",
  "Design–dev bridge",
  "Something else",
];

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [projectType, setProjectType] = useState(null);

  const mailtoHref = () => {
    const subject = projectType
      ? `Project inquiry — ${projectType}`
      : "Project inquiry";
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer" id="contact">
      <motion.p
        className="footer__kicker"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="pulse" aria-hidden="true" /> Currently booking Q3 ’26 —
        I would love to hear from you
      </motion.p>

      <motion.h2
        className="footer__title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <span className="line-mask">
          <motion.span
            className="line"
            variants={{
              hidden: { y: "110%" },
              visible: {
                y: "0%",
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            With me, it <em className="serif-italic">ships</em>.
          </motion.span>
        </span>
      </motion.h2>

      <div className="footer__form">
        <span className="footer__form-label">What do you need?</span>
        <div className="footer__chips" role="group" aria-label="Project type">
          {PROJECT_TYPES.map((type) => (
            <button
              key={type}
              className={`chip ${projectType === type ? "chip--active" : ""}`}
              onClick={() => setProjectType(projectType === type ? null : type)}
              aria-pressed={projectType === type}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="footer__send-row">
          <Magnetic>
            <a className="btn-send" href={mailtoHref()} data-hover>
              Send ↗
            </a>
          </Magnetic>
          <span className="meta">{EMAIL}</span>
          <button className="btn-copy" onClick={copyEmail} data-hover>
            {copied ? "Copied ✓" : "Copy email"}
          </button>
        </div>
      </div>

      <p className="footer__coffee">
        Let's grab some chai ☕ — based in New Delhi, working worldwide.
      </p>

      <div className="footer__bar">
        <span>
          © {new Date().getFullYear()} Jaskirat Singh Oberoi — designed &amp;
          coded by me
        </span>
        <nav className="footer__socials" aria-label="Social links">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label} ↗
            </a>
          ))}
        </nav>
        <a href="#top" className="footer__top" data-hover>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
