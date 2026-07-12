import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic.jsx";
import { EMAIL } from "../data.js";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

function useLocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        })
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Nav() {
  const time = useLocalTime();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <a href="#top" className="nav__brand" aria-label="Back to top">
        Jaskirat<span className="nav__brand-mark">®</span>
      </a>

      <nav className="nav__links" aria-label="Primary">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="nav__link">
            <span data-text={link.label}>{link.label}</span>
          </a>
        ))}
      </nav>

      <div className="nav__right">
        <span className="nav__time">
          Local time : <em>{time} IST</em>
        </span>
        <Magnetic strength={0.25}>
          <a href={`mailto:${EMAIL}`} className="btn-pill">
            Start a project
          </a>
        </Magnetic>
      </div>
    </motion.header>
  );
}
