import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.14 },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__body">
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

        <motion.h1
          className="hero__manifesto"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fade}
        >
          I craft <span className="accent">design systems</span>, coded
          prototypes and high&#8209;conversion websites — digital experiences
          where <span className="accent">design and code become one</span>.
        </motion.h1>

        <div className="hero__sub-row">
          <motion.p
            className="hero__sub"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fade}
          >
            I'm Jaskirat Singh Oberoi — a Design Technologist partnering with
            startups and design teams who believe craft makes the difference.
            Trained at Amazon and Boomi, now leading design engineering at Ares
            Labs. One brain, zero handoff.
          </motion.p>

          <motion.div
            className="hero__stats"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fade}
          >
            <span className="hero__stat">
              <b>8+</b>
              <span className="meta">years shipping</span>
            </span>
            <span className="hero__stat">
              <b>4</b>
              <span className="meta">design systems</span>
            </span>
            <span className="hero__stat">
              <b>20+</b>
              <span className="meta">projects shipped</span>
            </span>
          </motion.div>
        </div>
      </div>

      <motion.a
        className="hero__scroll-band"
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Scroll
      </motion.a>
    </section>
  );
}
