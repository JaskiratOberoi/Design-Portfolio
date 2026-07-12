import { motion } from "framer-motion";
import SectionHead from "./SectionHead.jsx";
import { EXPERIENCE } from "../data.js";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <SectionHead
        num="04"
        kicker="Career — the chapters so far"
        title="Where I've been"
      />

      <div className="experience__list">
        {EXPERIENCE.map((job, i) => (
          <motion.div
            className="exp-row"
            key={job.company}
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
          >
            <span className="exp-row__period meta">{job.period}</span>
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
