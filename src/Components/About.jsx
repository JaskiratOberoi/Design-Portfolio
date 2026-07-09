import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import portrait from "../assets/jay.jpg";
import resume from "../assets/resume.pdf";

const FACTS = [
  "Amazon India's first-ever Design Technologist",
  "Built design systems used by hundreds of engineers",
  "WCAG accessibility nerd",
  "Mantra: be kind to your future self",
];

export default function About() {
  return (
    <section className="about" id="about">
      <SectionHeading kicker="About — the person behind the pixels" title="Hi, I'm Jas" />

      <div className="about__grid">
        <motion.div
          className="about__photo"
          data-hover
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={portrait} alt="Portrait of Jaskirat Singh Oberoi" />
          <span className="about__photo-tag">New Delhi, India</span>
        </motion.div>

        <div className="about__body">
          <motion.p
            className="about__lead"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            An engineer by passion, a designer by choice. By day I'm a Senior
            Design Technologist at <strong>Boomi</strong>, building design
            systems used across the company. Before that, I spent four years at{" "}
            <strong>Amazon</strong> doing the same at a scale of millions of
            customers.
          </motion.p>
          <motion.p
            className="about__text"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Freelance is where I take everything I've learned inside big tech
            and apply it to teams that move fast. You get one person who can
            take an idea from whiteboard to production — no telephone game
            between designer and developer.
          </motion.p>

          <ul className="about__facts">
            {FACTS.map((fact, i) => (
              <motion.li
                key={fact}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.08 }}
              >
                <span className="accent">✦</span> {fact}
              </motion.li>
            ))}
          </ul>

          <motion.a
            className="btn-underline"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Download résumé <span aria-hidden="true">↓</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
