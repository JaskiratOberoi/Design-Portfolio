import { useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic.jsx";
import { EMAIL, SOCIALS } from "../data.js";

export default function Footer() {
  const [copied, setCopied] = useState(false);

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
      <div className="footer__cta">
        <motion.p
          className="footer__kicker"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Got a project in mind? <span className="pulse pulse--light" aria-hidden="true" /> Currently
          booking Q3 ’26
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
              Let's make
            </motion.span>
          </span>
          <span className="line-mask">
            <motion.span
              className="line"
              variants={{
                hidden: { y: "110%" },
                visible: {
                  y: "0%",
                  transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.12 },
                },
              }}
            >
              it <em className="serif-italic">real</em>
            </motion.span>
          </span>
        </motion.h2>

        <div className="footer__actions">
          <Magnetic>
            <a href={`mailto:${EMAIL}`} className="btn-big" data-hover>
              {EMAIL}
            </a>
          </Magnetic>
          <button className="btn-copy" onClick={copyEmail} data-hover>
            {copied ? "Copied ✓" : "Copy email"}
          </button>
        </div>
      </div>

      <div className="footer__bar">
        <span className="footer__credit">
          © {new Date().getFullYear()} Jaskirat Singh Oberoi — designed &amp; coded by me, obviously
        </span>
        <nav className="footer__socials" aria-label="Social links">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label} <span aria-hidden="true">↗</span>
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
