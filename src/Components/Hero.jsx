import { motion } from "framer-motion";
import Magnetic from "./Magnetic.jsx";

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 + i * 0.12 },
  }),
};

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.9 + i * 0.15 },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <motion.div
        className="hero__badge"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fade}
      >
        <span className="pulse" aria-hidden="true" />
        Available for freelance — taking projects for Q3 ’26
      </motion.div>

      <h1 className="hero__title">
        <span className="line-mask">
          <motion.span
            className="line"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={lineReveal}
          >
            Design
            <em className="serif-italic"> &amp; </em>
            code,
          </motion.span>
        </span>
        <span className="line-mask">
          <motion.span
            className="line line--outline"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={lineReveal}
          >
            one brain,
          </motion.span>
        </span>
        <span className="line-mask">
          <motion.span
            className="line"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={lineReveal}
          >
            zero handoff<span className="accent">.</span>
          </motion.span>
        </span>
      </h1>

      <div className="hero__bottom">
        <motion.p
          className="hero__intro"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fade}
        >
          I'm <strong>Jaskirat Singh Oberoi</strong> — a Design Technologist who
          designs interfaces <em className="serif-italic">and</em> builds them.
          Design systems, coded prototypes and websites for teams that are tired
          of things getting lost between Figma and production.
        </motion.p>

        <motion.div
          className="hero__stats"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fade}
        >
          <div className="stat">
            <span className="stat__num">8+</span>
            <span className="stat__label">years shipping</span>
          </div>
          <div className="stat">
            <span className="stat__num">4</span>
            <span className="stat__label">design systems built</span>
          </div>
          <div className="stat">
            <span className="stat__num">Amazon · Boomi</span>
            <span className="stat__label">trained &amp; trusted</span>
          </div>
        </motion.div>

        <motion.div
          className="hero__cta"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fade}
        >
          <Magnetic>
            <a href="#work" className="btn-circle" data-hover>
              <span>
                See
                <br />
                work
              </span>
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
