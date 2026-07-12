import { motion } from "framer-motion";
import SectionHead from "./SectionHead.jsx";
import { EXPERIENCE } from "../data.js";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <SectionHead
        num="04"
        kicker={`Career — ${EXPERIENCE.length} chapters and counting`}
        title="Where I've been"
      />

      <div className="experience__table">
        <div className="exp-head" aria-hidden="true">
          <span className="meta">Company</span>
          <span className="meta">Role</span>
          <span className="meta" style={{ textAlign: "right" }}>
            Years
          </span>
        </div>
        {EXPERIENCE.map((job, i) => (
          <motion.div
            className="exp-row"
            key={job.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
          >
            <span className="exp-row__company">{job.company}</span>
            <span className="exp-row__role">{job.role}</span>
            <span className="exp-row__period meta">{job.period}</span>
            <p className="exp-row__note">{job.note}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
