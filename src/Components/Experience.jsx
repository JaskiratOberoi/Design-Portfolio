import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { EXPERIENCE } from "../data.js";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <SectionHeading kicker="Career — full-time chapters" title="Where I've been" />

      <div className="experience__list">
        {EXPERIENCE.map((job, i) => (
          <motion.div
            className="exp-row"
            key={job.company}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
          >
            <span className="exp-row__period">{job.period}</span>
            <div className="exp-row__body">
              <h3 className="exp-row__company">{job.company}</h3>
              <span className="exp-row__role">{job.role}</span>
              <p className="exp-row__note">{job.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
