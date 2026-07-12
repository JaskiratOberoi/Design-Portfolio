import { motion } from "framer-motion";
import SectionHead from "./SectionHead.jsx";
import { EMAIL } from "../data.js";

const MODELS = [
  {
    title: "Project-based",
    text: "Fixed scope, clear deliverables. Design to deployed product, handled end-to-end by one person.",
  },
  {
    title: "Monthly retainer",
    text: "Ongoing design-engineering support — a dependable senior pair of hands alongside your team.",
  },
  {
    title: "Embedded",
    text: "I join your team as the design–dev bridge: specs translated, handoffs unblocked, UI pixel-faithful.",
  },
];

export default function Engage() {
  return (
    <section className="engage" id="engage">
      <SectionHead
        num="03"
        kicker="Ways to work with me"
        title="Your design engineer, without the hiring"
      />

      <div className="engage__grid">
        <motion.div
          className="engage-card engage-card--stat"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="engage-card__big">
            2<em>-in-</em>1
          </span>
          <p className="engage-card__text">
            Designer and engineer in one head — no telephone game, no
            translation loss, no second hire.
          </p>
        </motion.div>

        {MODELS.map((model, i) => (
          <motion.div
            className="engage-card"
            key={model.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i + 1) * 0.08 }}
          >
            <h3 className="engage-card__title">{model.title}</h3>
            <p className="engage-card__text">{model.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="engage__note"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Evenings &amp; weekends are for building.{" "}
        <a href={`mailto:${EMAIL}`}>Tell me what you need</a> — if it's not a
        fit, I'll say so in one email, not five.
      </motion.p>
    </section>
  );
}
