import { motion } from "framer-motion";
import { Ticks } from "./SectionHead.jsx";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 + i * 0.12 },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__top">
        <motion.span
          className="hero__ticks"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fade}
        >
          <Ticks />
        </motion.span>

        <div className="hero__intro-block">
          <motion.span
            className="hero__badge"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fade}
          >
            <span className="pulse" aria-hidden="true" />
            Available for freelance — Q3 ’26
          </motion.span>
          <motion.p
            className="hero__intro"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fade}
          >
            Jaskirat Oberoi is a Design Technologist who designs interfaces and
            builds them — specializing in{" "}
            <span className="accent">
              design systems, coded prototypes and high&#8209;conversion
              websites
            </span>{" "}
            for startups and design teams that ship.
          </motion.p>
          <motion.p
            className="hero__intro-sub"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fade}
          >
            8+ years across Amazon, Boomi and Ares Labs. One brain, zero
            handoff.
          </motion.p>
        </div>

        <motion.span
          className="hero__copyright meta"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fade}
        >
          ©2026
        </motion.span>
      </div>

      <div className="hero__wordmark-row">
        <h1 className="hero__wordmark" aria-label="Jaskirat">
          <span className="line-mask">
            <motion.span
              className="line"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            >
              Jaskirat<span className="reg">®</span>
            </motion.span>
          </span>
        </h1>
        <motion.span
          className="hero__scroll meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          Scroll
        </motion.span>
      </div>

      <motion.div
        className="hero__meta-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.1 }}
      >
        <span className="hero__stat">
          <b>8+</b>
          <span className="meta">years shipping</span>
        </span>
        <span className="hero__stat">
          <b>4</b>
          <span className="meta">design systems built</span>
        </span>
        <span className="hero__stat">
          <b>Amazon · Boomi</b>
          <span className="meta">trained &amp; trusted</span>
        </span>
        <span className="meta">New Delhi — working worldwide</span>
      </motion.div>
    </section>
  );
}
